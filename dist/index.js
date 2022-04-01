
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./guswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./guswap-sdk.cjs.development.js')
}
