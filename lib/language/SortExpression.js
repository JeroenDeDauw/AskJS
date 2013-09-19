"use strict";

function SortExpression(sortDirection) {
	this.sortDirection = sortDirection;
}

SortExpression.prototype = {
	constructor: SortExpression,

	getDirection: function() {
		return this.sortDirection;
	}
};

module.exports = SortExpression;