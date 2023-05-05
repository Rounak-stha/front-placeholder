import { useAppDispatch, useAppSelector } from '@/hooks'
import Image from 'next/image'
import ToggleFromCartBtn from '../../components/ToggleFromCartBtn'
import Button from '@/components/Button'
import { removeCartItem } from '@/app/redux/features/cart/cartSlice'

export default function CartItem({ id }: { id: string }) {
	const cartItem = useAppSelector((state) => state.cart.items.find((i) => i.id === id))
	const shopItemCount = useAppSelector((state) => {
		const foundShopItem = state.shop.items.find((i) => i.id === id)
		if (!foundShopItem) return null
		return foundShopItem.count
	})
	const dispatch = useAppDispatch()
	if (!cartItem || !shopItemCount) throw 'No Cart Item'
	const { name, count: cartItemCount, image, price, currency } = cartItem
	return (
		<div key={id} className='border border-bdr-light rounded-md'>
			<div className='flex flex-col sm:flex-row gap-4'>
				<div className='relative h-40 w-full sm:w-40'>
					<Image className='rounded-sm mb-2' alt='Macbook' src={image} fill style={{ objectFit: 'cover' }} />
				</div>
				<div className='p-6 flex flex-1'>
					<div className='flex-1 flex flex-col justify-around'>
						<p className='font-bold'>{name}</p>
						<div className='text-sm text-gray-400  font-bold flex gap-2'>
							<p className='mb-1'>{currency + ' ' + price}</p>
							{shopItemCount >= 2 * cartItemCount ? (
								<p className='text-green-500'>In Stock</p>
							) : (
								<p>Items: {shopItemCount - cartItemCount}</p>
							)}
						</div>
						<ToggleFromCartBtn shopItemId={id} />
					</div>

					<div className='flex flex-col justify-between sm:justify-around'>
						<p className='font-bold'>{currency + ' ' + parseInt(price) * cartItemCount}</p>
						<Button onClick={() => dispatch(removeCartItem(id))} intent='danger' text='Remove' />
					</div>
				</div>
			</div>
		</div>
	)
}
