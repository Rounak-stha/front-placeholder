'use client'

import {
	addCartItem,
	decrementCartItemCount,
	incrementCartItemCount,
	removeCartItem
} from '../../features/cart/cartSlice'
import { ShopItem } from '../../features/shop/shopSlice'
import { useAppDispatch, useAppSelector } from '@/hooks'

export default function ToggleFromCartBtn({ shopItem }: { shopItem: ShopItem }) {
	const cartItemCount = useAppSelector((state) => {
		const foundItem = state.cart.items.find((i) => i.id === shopItem.id)
		if (foundItem) return foundItem.count
		else return 0
	})

	const dispatch = useAppDispatch()

	function increaseCartItem() {
		if (cartItemCount === 0) dispatch(addCartItem({ ...shopItem, count: cartItemCount + 1 }))
		else dispatch(incrementCartItemCount(shopItem.id))
	}

	function decreaseCartItem() {
		if (cartItemCount === 1) dispatch(removeCartItem(shopItem.id))
		else dispatch(decrementCartItemCount(shopItem.id))
	}
	return (
		<div className='flex items-center font-bold rounded-sm border-2 border-gray-600'>
			<button
				onClick={() => decreaseCartItem()}
				className='px-2 py-0.5 border-r-2 border-r-gray-600'
				disabled={cartItemCount === 0}
				aria-disabled={cartItemCount === 0}
			>
				-
			</button>
			<p className='px-2 py-0.5 text-sm'>{cartItemCount}</p>
			<button
				onClick={() => increaseCartItem()}
				className='px-2 py-0.5 border-l-2 border-l-gray-600'
				disabled={cartItemCount === shopItem.count}
				aria-disabled={cartItemCount === shopItem.count}
			>
				+
			</button>
		</div>
	)
}
