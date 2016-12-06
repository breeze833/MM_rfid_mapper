Module.register("MM_rfid_mapper",{
    defaults: {
        rfidmap: {'f5172677': 'Test RFID Keyring', 'c15f46d5': 'Test RFID Card'}
    },
    notificationReceived: function(notification, payload, sender) {
        if (notification == 'RFID_SENSED') {
            var rfid = payload.rfid;
            if (rfid in this.config.rfidmap) {
                this.sendNotification('SHOW_ALERT', {type:'notification', title: rfid, message: this.config.rfidmap[rfid]});
            } else {
                this.sendNotification('SHOW_ALERT', {type:'notification', title: rfid, message: 'Unknown'});
            }
        }
    },
});
