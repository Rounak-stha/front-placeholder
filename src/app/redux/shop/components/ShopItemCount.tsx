'use client'

import { useAppSelector } from '@/hooks'

export default function ShopItemCount({ count, itemId }: { count: number; itemId: string }) {
	const itemCartCount = useAppSelector((state) => {
		const cartItem = state.cart.items.find((i) => i.id === itemId)
		return cartItem?.count
	})
	return <p className='flex-1'>Items: {itemCartCount ? count - itemCartCount : count}</p>
}
