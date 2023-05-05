import { NextResponse } from 'next/server'
import type { ShopItem } from '@/app/redux/features/shop/shopSlice'

const shopData: ShopItem[] = [
	{
		id: 'abcde',
		name: 'MacBook',
		image: '/images/mac_dark.png',
		price: '1200',
		currency: '$',
		count: 5
	},
	{
		id: 'abcdf',
		name: 'MacBook',
		image: '/images/mac.png',
		price: '1999',
		currency: '$',
		count: 3
	},
	{
		id: 'abcdg',
		name: 'Iphone',
		image: '/images/iphone.png',
		price: '1099',
		currency: '$',
		count: 9
	},
	{
		id: 'abcdh',
		name: 'MacBook',
		image: '/images/mac_dark.png',
		price: '1200',
		currency: '$',
		count: 5
	},
	{
		id: 'abcdi',
		name: 'MacBook',
		image: '/images/mac.png',
		price: '1999',
		currency: '$',
		count: 3
	},
	{
		id: 'abcdj',
		name: 'Iphone',
		image: `/images/iphone.png`,
		price: '1099',
		currency: '$',
		count: 9
	}
]

export async function GET() {
	await new Promise((resolve) => setTimeout(resolve, 1500))
	return NextResponse.json(shopData)
}
