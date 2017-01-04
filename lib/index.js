'use strict'

// set package `nopt` as the parse() function
module.exports = function noptPlugin(options, opt) {
  opt.parse = require('nopt')
}
