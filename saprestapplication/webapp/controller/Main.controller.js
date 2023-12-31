sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("saprestapplication.controller.Main", {
            onInit: function () {
                const oDataModel = this.getOwnerComponent().getModel('reporting');
                this.getView().setModel(oDataModel, "DataModel")
            }
        });
    });
