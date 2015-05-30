var ItemModel = require( 'models/item-model' );
var Collection = require( 'models/base/collection' );

var ItemCollection = module.exports = Collection.extend({
	model: ItemModel
});
