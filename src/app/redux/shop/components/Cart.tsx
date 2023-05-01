'use client'

import { useAppSelector } from '@/hooks'
import { ShoppingCart } from 'lucide-react'

export default function Cart() {
	const allCartItemCount = useAppSelector((state) => state.cart.items.reduce((count, item) => count + item.count, 0))
	return (
		<div className='relative h-10 w-10 flex items-center justify-center rounded-full border-2 border-gray-800'>
			<ShoppingCart size={18} />
			{allCartItemCount !== 0 && (
				<div className='absolute flex justify-center items-center text-sm text-white font-bold h-5 w-5 top-[-12px] right-[-6px] rounded-full bg-blue-500'>
					{allCartItemCount}
				</div>
			)}
		</div>
	)
}
