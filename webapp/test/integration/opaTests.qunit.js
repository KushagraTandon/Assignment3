/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Kushagra_06-11-19/Kushagra_06-11-19/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});