/* eslint-env node */
'use strict'

const EmberApp = require('ember-cli/lib/broccoli/ember-app')
const cssnext = require('postcss-cssnext')

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      exclude: [ 'assets/icons/' ]
    },
    postcssOptions: {
      compile: {
        enabled: false
      },
      filter: {
        enabled: true,
        map: { inline: false },
        plugins: [
          {
            module: cssnext,
            options: {
              browsers: [
                '> 1%',
                'last 3 versions',
                'Firefox ESR'
              ]
            }
          }
        ]
      }
    }
  })

  app.import('bower_components/xss/dist/xss.js')

  return app.toTree()
}
