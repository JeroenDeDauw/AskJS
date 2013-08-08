"use strict";

var SortExpression = require('./SortExpression');

var expression = function() {
	SortExpression.apply( this, arguments );
};

expression.prototype = Object.create( SortExpression.prototype );
expression.prototype.constructor = expression;

module.exports = expression;