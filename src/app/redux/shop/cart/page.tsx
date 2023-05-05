'use client'

import { useAppSelector } from '@/hooks'
import CartItem from './components/CartItem'

export default function CartPage() {
	const cartItemsId = useAppSelector((state) => state.cart.items.map(({ id }) => id))

	return (
		<div className='flex flex-col gap-3'>
			{cartItemsId.length ? (
				cartItemsId.map((id) => <CartItem key={id} id={id} />)
			) : (
				<div className='h-52 flex justify-center items-center'>
					<h1 className='text-xl font-bold'>Empty Cart</h1>
				</div>
			)}
		</div>
	)
}
