"use strict";

function PropertySelectionRequest(propertyId) {
	this.propertyId = propertyId;
}

PropertySelectionRequest.prototype = {
	constructor: PropertySelectionRequest,

	getPropertyId: function() {
		return this.propertyId;
	}
};

module.exports = PropertySelectionRequest;