# algo-quick-find

[![Build Status](https://travis-ci.org/bredele/algo-quick-find.svg?branch=master)](https://travis-ci.org/bredele/algo-quick-find)
[![NPM](https://img.shields.io/npm/v/algo-quick-find.svg?style=flat-square)](https://www.npmjs.com/package/algo-quick-find)
[![Downloads](https://img.shields.io/npm/dm/algo-quick-find.svg?style=flat-square)](http://npm-stat.com/charts.html?package=algo-quick-find)
[![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/community.md)

Quick find algorithm or so called eager algorithm to resolve dynamic connectivity problems.


This algorithm is too expensive. Indeed it takes quadratic time to perform unions on nodes, i.e it takes N^2 access to the array of nodes to process a sequence of N union on nodes. For this reason, you should probably look at different algorithm to resolve dynamic connectivity problems such as the [quick-union](https://github.com/bredele/algo-quick-union) algorithm.


## Usage

```javascript
const algo = require('algo-quick-find')

const nodes = algo([0, 1, 2, 3, 4, 5])
nodes.connected(1, 2)
// => false

nodes.union(1, 2)
nodes.connected(1, 2)
// => true
nodes.union(2, 5)
nodes.connected(1, 5)
// => true
```

## Installation

```shell
npm install algo-quick-find --save
```

[![NPM](https://nodei.co/npm/algo-quick-find.png)](https://nodei.co/npm/algo-quick-find/)

## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

This is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">guideline</a> before making a pull request. If you have any project, component or other let everyone know in our wiki.


## Licence

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
