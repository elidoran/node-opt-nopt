assert = require 'assert'
plugin = require '../../lib'

describe 'test plugin', ->

  it 'should set nopt into specified opt as parse', ->

    opt = {}
    plugin null, opt # no options...
    assert opt.parse
    assert.equal opt.parse, require 'nopt'
