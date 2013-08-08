"use strict";

function PropertySelectionRequest(propertyId) {
	this.propertyId = propertyId;
}

PropertySelectionRequest.prototype = {
	getPropertyId: function() {
		return this.propertyId;
	}
};

module.exports = PropertySelectionRequest;