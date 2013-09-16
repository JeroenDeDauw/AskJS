"use strict";

function AnyValue() {
}

AnyValue.prototype = {
	getType: function() {
		return 'anyValue';
	},

	getSize: function() {
		return 0;
	},

	getDepth: function() {
		return 0;
	}
};

module.exports = AnyValue;