"use strict";

function Query() {

}

Query.prototype = {
	getLimit: function() {
		return 42;
	}
};

exports.Query = Query;