var Controller = require('controllers/base/controller');
var HeaderView = require('views/home/header-view');
var HomePageView = require('views/home/home-page-view');

var ItemCollection = require( 'models/item-collection' );
var demoData = [
	{ title: "Foo the bars" },
	{ title: "Bing the bazzes" },
	{ title: "Frobdicate the thingernubbers" },
	{ title: "Mark the pliers" }
];

var itemCollection = new ItemCollection( demoData );

module.exports = Controller.extend({
    beforeAction: function() {
        this.constructor.__super__.beforeAction.apply( this, arguments );
        this.reuse( 'header', HeaderView, {
            region: 'header'
        });
    },

    index: function() {
        this.view = new HomePageView({
            region: 'main',
            collection: itemCollection
        });
    }
});