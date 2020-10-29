# middle-item [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/middle-item/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/middle-item)

Get the middle item from an array.

[![NPM Badge](https://nodei.co/npm/middle-item.png)](https://npmjs.com/package/middle-item)

## Install

```sh
npm install middle-item
```

## Usage

```js
const middleItem = require("middle-item")

middleItem([1, 2, 3])
//=> 2

middleItem([1, 2, 3, 4])
//=> 2

middleItem([1, 2, 3, 4], { leanRight: true })
//=> 3

middleItem.multiple([1, 2, 3, 4, 5], 3)
//=> [2, 3, 4]

middleItem.multiple([1, 2, 3, 4, 5], 2)
//=> [2, 3]

middleItem.multiple([1, 2, 3, 4, 5], 2, { leanRight: true })
//=> [3, 4]
```

## API

### middleItem(array, options?)

Get the middle item from an array.

#### array

Type: `array`

The array to get the middle item from.

#### options

Type: `object`

##### leanRight

Type: `boolean`\
Default: `false`

If trying to get an even number of items from an array with an odd number of items (or vice versa), prefer the item on the right side of the middle rather than the left.

### middleItem.multiple(array, count, options?)

Get items from the middle of an array.

#### array

Type: `array`

The array to get the middle items from.

#### count

Type: `number`

The amount of items to get.

#### options

Type: `object`

Same as [`middleItem`](#options).
