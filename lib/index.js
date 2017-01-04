'use strict'

// set package `nopt` as the parse() function
// set its typeDefs object on `opt` for others to access
module.exports = function noptPlugin(options, opt) {
  opt.parse = require('nopt')
  opt.typeDefs = opt.parse.typeDefs
}
