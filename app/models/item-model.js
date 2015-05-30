var Model = require( 'models/base/model' );

var ItemModel = module.exports = Model.extend({
	defaults: {
		completed: false,
		title: ''
	}
});
