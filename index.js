"use strict"

const middleItemMultiple = (array, count, { leanRight = false } = {}) => {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got ${typeof array}`)
	}

	if (!Number.isInteger(count) || count < 0) {
		throw new TypeError(`Expected a non-negative integer, got ${typeof count}`)
	}

	if (count >= array.length) {
		return array
	}

	const startIndex = Math[leanRight ? "ceil" : "floor"]((array.length / 2) - (count / 2))
	return array.slice(startIndex, startIndex + count)
}

module.exports = (array, options) => middleItemMultiple(array, 1, options)[0]

module.exports.multiple = middleItemMultiple
