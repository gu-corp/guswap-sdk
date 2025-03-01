
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./x-swap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./x-swap-sdk.cjs.development.js')
}
