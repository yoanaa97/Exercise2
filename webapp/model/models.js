sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createProductsModel: function () {
			var path = jQuery.sap.getModulePath(
				"home.kpmg.exercise2",
				"/model/products.json"
			);
			// initialize the model with the JSON file
			var productsModel = new JSONModel(path);

			// set the model to the view
			return productsModel;
		}

	};
});