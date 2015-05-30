var View = require('views/base/view');

module.exports = View.extend({
	events: {
		'click .tdl-item-toggle': 'toggle'
	},
	tagName: 'li',
	className: 'tdl-item',
	template: require( './templates/item' ),

	toggle: function( event ) {
		event.preventDefault();

		this.model.set( 'completed', ! this.model.get( 'completed' ) );
		fastdom.write( function() {
			this.render();
		}, this );
	},
});
