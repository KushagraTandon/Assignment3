sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"Kushagra_06-11-19/Kushagra_06-11-19/formatter/reusables"
], function (Controller, JSONModel, reusables) {
	"use strict";

	return Controller.extend("Kushagra_06-11-19.Kushagra_06-11-19.controller.View1", {
		test : reusables,
		onInit: function () {

			var oModel = new sap.ui.model.json.JSONModel("./model/data.json");
			this.getView().byId("table1").setModel(oModel);
		}
		
	});
});