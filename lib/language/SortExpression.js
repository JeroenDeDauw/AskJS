"use strict";

function SortExpression(sortDirection) {
	this.sortDirection = sortDirection;
}

SortExpression.prototype = {
	getDirection: function() {
		return this.sortDirection;
	}
};

module.exports = SortExpression;