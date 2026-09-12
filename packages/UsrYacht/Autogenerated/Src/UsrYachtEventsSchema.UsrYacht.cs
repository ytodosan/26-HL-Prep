namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtEventsSchema

	/// <exclude/>
	public class UsrYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtEventsSchema(UsrYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("5fe79cf4-3dac-4c7a-92c4-2eac1ad2522e");
			Name = "UsrYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("9dcb38ef-24dc-4192-b7f5-2fab0e602502");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,84,203,110,219,48,16,188,251,43,22,62,73,128,202,228,92,199,5,18,35,41,2,164,15,212,78,128,162,232,129,150,214,54,27,62,4,146,82,226,6,249,247,46,73,249,33,219,13,194,139,32,238,238,112,102,56,146,230,10,93,205,75,132,25,90,203,157,89,120,54,49,122,33,150,141,229,94,24,61,120,25,0,173,198,9,189,132,233,218,121,84,163,189,157,253,41,165,140,254,95,205,34,187,214,94,120,129,238,29,45,236,186,69,237,187,206,95,113,119,29,183,238,4,17,208,104,179,105,185,66,197,191,18,123,24,195,240,222,217,159,188,92,249,97,254,59,142,212,205,92,138,18,74,201,157,131,88,57,129,1,31,225,138,59,60,81,137,24,73,119,88,103,103,112,35,13,247,224,162,124,112,232,125,32,191,50,178,10,79,191,66,80,252,89,168,70,1,151,210,60,97,5,235,112,40,212,86,148,200,246,129,46,65,27,253,161,54,142,116,182,8,45,151,13,13,35,215,46,194,72,161,132,7,225,168,203,67,217,221,3,86,5,56,19,235,164,186,124,12,117,247,40,234,26,171,29,54,29,213,114,143,97,200,17,83,111,3,179,47,252,249,123,160,48,77,140,39,166,234,217,181,41,15,71,131,29,78,178,206,180,116,51,130,218,91,35,42,248,166,167,188,37,128,204,204,255,96,73,240,168,43,180,5,36,239,174,112,65,151,23,29,188,180,75,7,152,111,209,118,38,134,53,39,187,217,22,107,3,130,249,168,215,149,64,59,7,199,144,165,247,60,181,247,91,43,44,133,226,50,184,31,133,80,251,65,162,122,89,102,148,223,206,10,199,62,163,127,8,238,95,116,32,159,178,30,116,88,145,2,187,119,104,9,70,147,112,194,40,78,153,90,192,185,58,80,33,22,144,109,105,93,140,225,60,239,149,95,142,14,179,232,27,171,71,33,36,29,242,113,14,88,111,234,245,164,23,117,103,68,34,79,42,103,107,10,202,196,200,70,233,3,193,33,8,41,0,39,200,215,27,230,27,21,239,20,240,6,69,100,183,110,194,117,137,146,190,144,49,120,219,224,94,242,194,234,114,75,255,36,199,151,56,67,85,203,16,234,49,104,124,130,59,83,114,41,254,242,185,196,105,236,203,78,93,16,251,129,206,52,150,238,199,27,75,32,197,17,209,109,254,211,95,102,88,192,240,8,218,177,232,213,173,155,25,115,37,150,233,109,152,179,153,233,142,206,223,100,78,140,211,6,187,49,86,113,159,29,40,42,118,174,246,13,243,43,107,158,162,218,235,231,18,235,32,104,51,187,215,153,108,125,29,188,14,254,1,223,230,200,201,192,5,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("5f59df8a-47f1-008f-eb0b-4952b5b8583b"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("9dcb38ef-24dc-4192-b7f5-2fab0e602502"),
				CreatedInSchemaUId = new Guid("5fe79cf4-3dac-4c7a-92c4-2eac1ad2522e"),
				ModifiedInSchemaUId = new Guid("5fe79cf4-3dac-4c7a-92c4-2eac1ad2522e")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("5fe79cf4-3dac-4c7a-92c4-2eac1ad2522e"));
		}

		#endregion

	}

	#endregion

}

