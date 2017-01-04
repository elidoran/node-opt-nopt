# @opt/nopt
[![Build Status](https://travis-ci.org/elidoran/node-opt-nopt.svg?branch=master)](https://travis-ci.org/elidoran/node-opt-nopt)
[![Dependency Status](https://gemnasium.com/elidoran/node-opt-nopt.png)](https://gemnasium.com/elidoran/node-opt-nopt)
[![npm version](https://badge.fury.io/js/%40opt%2Fnopt.svg)](http://badge.fury.io/js/%40opt%2Fnopt)
[![Coverage Status](https://coveralls.io/repos/github/elidoran/node-opt-nopt/badge.svg?branch=master)](https://coveralls.io/github/elidoran/node-opt-nopt?branch=master)

Plugin for @opt/parse making nopt the parser.

See [@opt/parse](https://www.npmjs.com/package/@opt/parse)

See [@opt/nopt](https://www.npmjs.com/package/nopt)

See [@use/core](https://www.npmjs.com/package/@use/core)


## Install

```sh
npm install @opt/nopt --save
```


## Usage

```javascript
var parse = require('@opt/parse')

// choose the internal parser as `nopt`
parse.use('@opt/nopt')

// optionally add other plugins by package name:
parse.use('@opt/words', '@opt/require')

// then use parse as you would use `nopt`,
// plus any changes made possible by the plugins added
options = parse({}, {}, process.argv, 2)
```


## MIT License
