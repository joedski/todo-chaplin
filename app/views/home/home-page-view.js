// var View = require('views/base/view');
var CollectionView = require( 'views/base/collection-view' );
var ItemView = require( 'views/item/item-view' );

module.exports = CollectionView.extend({
  autoRender: true,
  className: 'home-page',
  template: require( './templates/home' ),
  itemView: ItemView,
  listSelector: 'ul.tdl'
});
