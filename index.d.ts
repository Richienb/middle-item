declare namespace middleItem {
	export interface Options {
		/**
		If trying to get an even number of items from an array with an odd number of items (or vice versa), prefer the item on the right side of the middle rather than the left.

		@default false
		*/
		leanRight?: boolean
	}
}

declare const middleItem: {
	/**
	Get items from the middle of an array.

	@param array The array to get the middle items from.
	@param count The amount of items to get.
	@return The specified amount of items from the middle of the array.

	@example
	```
	const middleItem = require("middle-item")

	middleItem.multiple([1, 2, 3, 4, 5], 3)
	//=> [2, 3, 4]

	middleItem.multiple([1, 2, 3, 4, 5], 2)
	//=> [2, 3]

	middleItem.multiple([1, 2, 3, 4, 5], 2, { leanRight: true })
	//=> [3, 4]
	```
	*/
	multiple: <ArrayValueType>(array: ArrayValueType[], count: number, options?: middleItem.Options) => ArrayValueType[]

	/**
	Get the middle item from an array.

	@param array The array to get the middle item from.
	@return The middle item in the array.

	@example
	```
	const middleItem = require("middle-item")

	middleItem([1, 2, 3])
	//=> 2

	middleItem([1, 2, 3, 4])
	//=> 2

	middleItem([1, 2, 3, 4], { leanRight: true })
	//=> 3
	```
	*/
	<ArrayValueType>(array: ArrayValueType[], options?: middleItem.Options): ArrayValueType

}

export = middleItem
