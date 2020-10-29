const test = require("ava")
const middleItem = require(".")

test("main", t => {
	t.is(middleItem([1, 2, 3]), 2)
	t.is(middleItem([1, 2, 3, 4]), 2)
	t.is(middleItem([1, 2, 3, 4], { leanRight: true }), 3)
})

test(".multiple()", t => {
	t.deepEqual(middleItem.multiple([1, 2, 3, 4, 5], 3), [2, 3, 4])
	t.deepEqual(middleItem.multiple([1, 2, 3, 4, 5], 2), [2, 3])
	t.deepEqual(middleItem.multiple([1, 2, 3, 4, 5], 2, { leanRight: true }), [3, 4])
})
