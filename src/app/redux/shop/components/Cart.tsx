'use client'

import { useAppSelector } from '@/hooks'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function Cart() {
	const allCartItemCount = useAppSelector((state) => state.cart.items.reduce((count, item) => count + item.count, 0))
	return (
		<Link href='/redux/shop/cart'>
			<div className='relative h-10 w-10 cursor-pointer flex items-center justify-center rounded-full border-2 border-bdr-light'>
				<ShoppingCart size={18} />
				{allCartItemCount !== 0 && (
					<div className='absolute flex justify-center items-center text-xs text-white h-5 w-5 top-[-12px] right-[-6px] rounded-full bg-primary-500'>
						{allCartItemCount}
					</div>
				)}
			</div>
		</Link>
	)
}
