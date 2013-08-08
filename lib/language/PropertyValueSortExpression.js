"use strict";

var SortExpression = require('./SortExpression');

var expression = function( propertyId, direction ) {
	SortExpression.call( this, direction );

	this.propertyId = propertyId;
};

expression.prototype = Object.create( SortExpression.prototype );
expression.prototype.constructor = expression;

expression.prototype.getPropertyId = function() {
	return this.propertyId;
};

module.exports = expression;