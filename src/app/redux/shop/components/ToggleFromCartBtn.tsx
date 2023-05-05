'use client'

import {
	addCartItem,
	decrementCartItemCount,
	incrementCartItemCount,
	removeCartItem
} from '../../features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '@/hooks'

export default function ToggleFromCartBtn({ shopItemId }: { shopItemId: string }) {
	const cartItemCount = useAppSelector((state) => {
		const foundItem = state.cart.items.find((i) => i.id === shopItemId)
		if (foundItem) return foundItem.count
		else return 0
	})

	const shopItem = useAppSelector((state) => state.shop.items.find((i) => i.id === shopItemId))

	if (!shopItem) throw 'No Shop Item'

	const shopItemCount = shopItem.count

	const dispatch = useAppDispatch()

	function increaseCartItem() {
		if (cartItemCount === 0) dispatch(addCartItem({ ...shopItem!, count: cartItemCount + 1 }))
		else dispatch(incrementCartItemCount(shopItemId))
	}

	function decreaseCartItem() {
		if (cartItemCount === 1) dispatch(removeCartItem(shopItemId))
		else dispatch(decrementCartItemCount(shopItemId))
	}
	return (
		<div className='flex items-center w-fit font-bold rounded-sm border-2 border-bdr-light'>
			<button
				onClick={() => decreaseCartItem()}
				className='px-3 py-0.5 border-r-2 border-r-bdr-light disabled:cursor-not-allowed'
				disabled={cartItemCount === 0}
				aria-disabled={cartItemCount === 0}
			>
				-
			</button>
			<p className='px-3 py-0.5 text-sm'>{cartItemCount}</p>
			<button
				onClick={() => increaseCartItem()}
				className='px-3 py-0.5 border-l-2 border-l-bdr-light disabled:cursor-not-allowed'
				disabled={cartItemCount === shopItemCount}
				aria-disabled={cartItemCount === shopItemCount}
			>
				+
			</button>
		</div>
	)
}
