'use client'

import { useAppSelector } from '@/hooks'
import CartItem from './components/CartItem'

export default function CartPage() {
	const cartItemsId = useAppSelector((state) => state.cart.items.map(({ id }) => id))

	return (
		<div className='flex flex-col gap-3'>
			{cartItemsId.map((id) => (
				<CartItem key={id} id={id} />
			))}
		</div>
	)
}
