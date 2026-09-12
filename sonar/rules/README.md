# Creatio custom Sonar rules

Rule repository key: `creatio-csharp` · Language: C#

| Rule | Title | Severity |
|---|---|---|
| [CR0001](CR0001/) | Business thresholds in Creatio server code must be read from a bound system setting, not hard-coded | Major |

## What is in a rule folder

| File | Purpose | Consumed by |
|---|---|---|
| `CR0001.json` | Rule metadata — type, severity, Clean Code impacts, tags, remediation cost | SonarQube rule loader |
| `CR0001.html` | User-facing description — why it matters, noncompliant/compliant examples, exceptions | Sonar UI, shown next to each issue |
| `rule-spec.md` | Detection logic, allow-list, cross-file checks, and a 14-case test corpus | The rule-authoring agent |

`CR0001.json` + `CR0001.html` are the standard Sonar RSPEC pair and drop straight into a custom plugin at
`org/sonar/l10n/cs/rules/creatio-csharp/`. `rule-spec.md` is the part an agent needs in order to *write* the
analyzer — it is not shipped to end users.

## Feeding this to Sonar's agent

Hand it all three files and the prompt:

> Implement rule CR0001 for the `creatio-csharp` repository as a Roslyn `DiagnosticAnalyzer`.
> `rule-spec.md` is normative for detection; `CR0001.html` is the user-facing description; `CR0001.json`
> is the metadata. Satisfy every case in the §4 test corpus, and raise §3.8 as `CR0002` if cross-file
> analysis is not available in the engine.

## The short version of CR0001

A value that expresses business policy — a price ceiling, a retry count, a status `Guid` — must not be a
literal in C#. It must be **bound**, in three places at once:

1. **Value → setting.** Read through `SysSettings.GetValue<T>(UserConnection, code, fallback)`.
   Moving the number into a `const decimal` does not count; it is still compiled into the assembly.
2. **Code → constant.** The setting code is a `private const string` field, not an inline string that gets
   copy-pasted and eventually typo'd into a silent fallback.
3. **Setting → package.** `Data/SysSettings_<Code>/` and `Data/SysSettingsValue_<Code>/` ship in the package,
   so installing it creates the setting. Code reading a setting nobody installs is a latent defect.

Plus: handle the unconfigured case explicitly, because `GetValue` returns the fallback when the setting is
missing — a `0` fallback used as a maximum rejects every record.

Worked reference: [`packages/UsrYacht/Schemas/UsrYachtEvents/UsrYachtEvents.cs`](../../packages/UsrYacht/Schemas/UsrYachtEvents/UsrYachtEvents.cs)
and the `UsrYachtMaxPrice` setting under `packages/UsrYacht/Data/`.
