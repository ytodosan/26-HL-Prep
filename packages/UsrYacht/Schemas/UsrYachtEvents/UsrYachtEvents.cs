namespace Terrasoft.Configuration
{
    using System;
    using Terrasoft.Common;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;
    [EntityEventListener(SchemaName = "UsrYacht")]
    public class YachtEntityEventListener : BaseEntityEventListener
    {
        // Float system setting holding the maximum allowed yacht price.
        // A non-positive value means the limit is not configured, so the check is skipped.
        private const string MaxPriceSettingCode = "UsrYachtMaxPrice";

        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            Entity yacht = (Entity)sender;
            decimal maxPrice = Terrasoft.Core.Configuration.SysSettings.GetValue<decimal>(
                yacht.UserConnection, MaxPriceSettingCode, 0m);
            if (maxPrice <= 0)
            {
                return; // Setting is not configured.
            }
            decimal price = yacht.GetTypedColumnValue<decimal>("UsrPrice");
            if (price <= maxPrice)
            {
                return;
            }
            e.IsCanceled = true;

            string messageTemplate = new LocalizableString(yacht.UserConnection.ResourceStorage,
                "UsrYachtEvents", "LocalizableStrings.ValueIsTooBig.Value").ToString();

            string message = string.Format(messageTemplate, maxPrice);
            throw new Exception(message);
        }
    }
}
