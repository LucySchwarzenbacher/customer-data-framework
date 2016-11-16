pimcore.registerNS("pimcore.plugin.customermanagementframework");

pimcore.plugin.customermanagementframework = Class.create(pimcore.plugin.admin, {
    getClassName: function() {
        return "pimcore.plugin.customermanagementframework";
    },

    initialize: function() {
        pimcore.plugin.broker.registerPlugin(this);
    },
 
    pimcoreReady: function (params,broker){
        // alert("CustomerManagementFramework Plugin Ready!");
    },

    postOpenObject: function(object, type) {
        if(pimcore.globalmanager.get("user").isAllowed(ActivityView.config.PERMISSION)) {
            var panel = new ActivityView.ActivityTab(object, type).getPanel();

            object.tab.items.items[1].insert(1, panel);
            panel.updateLayout();

            // fixme needed maybe
            // pimcore.layout.refresh()
       }
    }
});

var customermanagementframeworkPlugin = new pimcore.plugin.customermanagementframework();
