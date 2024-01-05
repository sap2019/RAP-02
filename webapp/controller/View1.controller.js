sap.ui.define([
    'emc2/hr/payroll/controller/BaseController',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'sap/m/MessageToast'
], function(BaseController, Filter, FilterOperator,   MessageToast) {
    'use strict';
    return BaseController.extend("emc2.hr.payroll.controller.View1",{
        onInit: function(){
            this.oRouter = this.getOwnerComponent().getRouter();
            
        },
        onSearch:function(oEvent){
            //Step 1: get the value of what user is searching for from event object
            //https://ui5.sap.com/#/api/sap.m.SearchField%23events/search
            var sValue = oEvent.getParameter("query");
            //Step 2: Create a search object (like a if condition opr1 OPR opr2)
            var oFilter1 = new Filter("name", FilterOperator.Contains, sValue);
            var oFilter2 = new Filter("type", FilterOperator.Contains, sValue);
            //Construct a filter with OR when we need multiple
            var oFilter = new Filter({
                filters: [oFilter1, oFilter2],
                and:false
            });
            //Step 3: Get the object of list control
            var oList = this.getView().byId("idList");
            //var oList = oEvent.getSource();
            //Step 4: Get the binding - items
            var oBinding = oList.getBinding("items");
            //Step 5: Pass filter to the binding
            oBinding.filter(oFilter);
        },
        onItemPress: function(oEvent){
            //Step 1: get the address of the selected element
            var sPath = oEvent.getParameter("listItem").getBindingContextPath();
            // //Step 2: Get the object of the second view
            // //var oView2 = this.getView().getParent().getPages()[1];
            // var oView2 = this.getView().getParent().getParent().getDetailPages()[1];
            // //Step 3: Bind the element to 2nd view
            // //sPath is Absolute path of the element you choose here /fruits/2 as exmaple
            // oView2.bindElement(sPath);
            // //Navigate also
            //

            var sIndex = sPath.split("/")[sPath.split("/").length - 1];
            this.onGoTo(sIndex);

        },
        onDeleteItem: function(oEvent){
            //Step 1: Find out which item was pressed for deletion
            var oItemToBeDeleted = oEvent.getParameter("listItem");
            //Step 2: Get the object of list control = without using ID is a good practice
            var oList = oEvent.getSource();
            //Step 3: call Delete API provided by SDK
            oList.removeItem(oItemToBeDeleted);
            var sDeletedItemTitle = oItemToBeDeleted.getTitle();
            MessageToast.show("Item '" + sDeletedItemTitle + "' is deleted");
        },
        onGoTo: function(sIndex){
            //Step 1: get the object of the app container control
            //get the object of the parent
            // var oAppCon = this.getView().getParent().getParent();
            // //Step 2: Call function of the container to navigate
            // oAppCon.toDetail("idView2");
            this.oRouter.navTo("superman",{
                devyani:  sIndex 
            });
        }
    });
});