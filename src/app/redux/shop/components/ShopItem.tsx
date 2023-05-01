import Image from 'next/image'
import type { ShopItem as SI } from '../../features/shop/shopSlice'
import ToggleFromCartBtn from './ToggleFromCartBtn'
import ShopItemCount from './ShopItemCount'

export default function ShopItem({ SItem }: { SItem: SI }) {
	const { id, name, image, price, count } = SItem
	return (
		<div className='border border-gray-800'>
			<div className='relative h-40'>
				<Image className='rounded-sm mb-2' alt='Macbook' src={image} fill style={{ objectFit: 'cover' }} />
			</div>
			<div className='m-3'>
				<div className='flex mb-1 font-bold'>
					<p className='flex-1 '>{name}</p>
					<p className='text-sm'>{price}</p>
				</div>
				<div className='flex items-center'>
					<ShopItemCount itemId={id} count={count} /> <ToggleFromCartBtn shopItem={SItem} />
				</div>
			</div>
		</div>
	)
}
