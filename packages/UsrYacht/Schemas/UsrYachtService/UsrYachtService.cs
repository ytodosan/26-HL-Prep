namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using System;
    using System.Web.SessionState;
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class YachtService : BaseService, IReadOnlySessionState
    {
        // Lookup system setting (UsrStatus) holding the status that counts as "afloat".
        private const string AfloatStatusSettingCode = "UsrYachtAfloatStatus";

        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]

        public decimal GetMaxPriceByDriveTypeId(string driveTypeId)
        {
            if (string.IsNullOrEmpty(driveTypeId))
            {
                return -1;
            }
            Guid afloatStatusId = Terrasoft.Core.Configuration.SysSettings.GetValue<Guid>(
                UserConnection, AfloatStatusSettingCode, Guid.Empty);
            if (afloatStatusId == Guid.Empty)
            {
                return -1; // Setting is not configured.
            }
            Select select = new Select(UserConnection)
                .Column(Func.Max("UsrPrice"))
                .From("UsrYacht")
                .Where("UsrDriveTypeId").IsEqual(Column.Parameter(new Guid(driveTypeId)))
                .And("UsrStatusId").IsEqual(Column.Parameter(afloatStatusId))
                as Select;
            decimal result = select.ExecuteScalar<decimal>();
            return result;
        }
        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample()
        {
            return "OK!";
        }

    }
}
