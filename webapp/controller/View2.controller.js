sap.ui.define([
	'emc2/hr/payroll/controller/BaseController',
    'sap/m/MessageBox',
	"sap/m/MessageToast"
], function(
	BaseController,
	MessageBox,
	MessageToast
) {
	"use strict";

	return BaseController.extend("emc2.hr.payroll.controller.View2", {

       
        onInit: function() {
            // BaseController.prototype.onInit.apply(this, arguments);
            this.oRouter =this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("superman").attachMatched(this.herculis, this);
        
        },
herculis: function(oEvent){


var sIndex = oEvent.getParameter("arguments").devyani;
            var sPath = '/fruits/' + sIndex;
            this.getView().bindElement(sPath);
 },
        onBack: function(){
            var oAppCon = this.getView().getParent();

            oAppCon.to("idView1");
        },
        onSave: function(){
            MessageBox.confirm("Do you want to save",{
                title:" Sushmita is here",
                onClose: function(status){
                    if (status === 'OK'){
                        MessageToast.show("Object was saved")
                    } else {
                        MessageToast.show("Object was not saved")
                    }
                }
            })

        },
        onCancel: function(){

        }
	});
});