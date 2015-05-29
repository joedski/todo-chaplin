exports.config = {
  conventions: {
    ignored: [
      /(^|[\/\\])_.+/,
      /^bower_components[\/\\]bootstrap-stylus[\/\\]bootstrap[\/\\]/
    ],
    assets: [
      /assets[\\\/]/,
      /^bower_components[\/\\]bootstrap-stylus[\/\\]fonts[\/\\]/
    ]
  },
  files: {
    javascripts: {
      joinTo: {
        'javascripts/app.js': /^app/,
        'javascripts/vendor.js': /^(?!app)/
      }
    },
    stylesheets: {
      joinTo: 'stylesheets/app.css',
      order: {
        before: [
          'app/views/styles/bootstrap.*'
        ]
      }
    },
    templates: {
      joinTo: 'javascripts/app.js'
    }
  }
};
