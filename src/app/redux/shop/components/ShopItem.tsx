import Image from 'next/image'
import type { ShopItem as SI } from '../../features/shop/shopSlice'
import ToggleFromCartBtn from './ToggleFromCartBtn'
import ShopItemCount from './ShopItemCount'

export default function ShopItem({ SItem }: { SItem: SI }) {
	const { id, name, image, price, currency, count } = SItem
	return (
		<div className='border border-bdr-light'>
			<div className='relative h-40'>
				<Image className='rounded-sm mb-2' alt='Macbook' src={image} fill style={{ objectFit: 'cover' }} />
			</div>
			<div className='m-3'>
				<div className='flex mb-1 font-bold'>
					<p className='flex-1 '>{name}</p>
					<p className='text-sm'>{currency + price}</p>
				</div>
				<div className='flex items-center'>
					<ShopItemCount itemId={id} count={count} />
					<ToggleFromCartBtn shopItemId={id} />
				</div>
			</div>
		</div>
	)
}
