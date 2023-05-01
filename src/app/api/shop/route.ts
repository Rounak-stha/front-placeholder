import { NextResponse } from 'next/server'
import type { ShopItem } from '@/app/redux/features/shop/shopSlice'

const shopData: ShopItem[] = [
	{
		id: 'abcde',
		name: 'MacBook',
		image: 'https://images.unsplash.com/photo-1588053631229-d04fd47cf0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjc2V0dXB8ZW58MHx8MHx8&w=1000&q=80',
		price: '$1200',
		count: 5
	},
	{
		id: 'abcdf',
		name: 'MacBook',
		image: 'https://images.unsplash.com/photo-1588053631229-d04fd47cf0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjc2V0dXB8ZW58MHx8MHx8&w=1000&q=80',
		price: '$1200',
		count: 5
	},
	{
		id: 'abcdg',
		name: 'MacBook',
		image: 'https://images.unsplash.com/photo-1588053631229-d04fd47cf0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjc2V0dXB8ZW58MHx8MHx8&w=1000&q=80',
		price: '$1200',
		count: 5
	},
	{
		id: 'abcdh',
		name: 'MacBook',
		image: 'https://images.unsplash.com/photo-1588053631229-d04fd47cf0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjc2V0dXB8ZW58MHx8MHx8&w=1000&q=80',
		price: '$1200',
		count: 5
	},
	{
		id: 'abcdi',
		name: 'MacBook',
		image: 'https://images.unsplash.com/photo-1588053631229-d04fd47cf0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjc2V0dXB8ZW58MHx8MHx8&w=1000&q=80',
		price: '$1200',
		count: 5
	},
	{
		id: 'abcdj',
		name: 'MacBook',
		image: 'https://images.unsplash.com/photo-1588053631229-d04fd47cf0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjc2V0dXB8ZW58MHx8MHx8&w=1000&q=80',
		price: '$1200',
		count: 5
	}
]

export async function GET() {
	await new Promise((resolve) => setTimeout(resolve, 1500))
	return NextResponse.json(shopData)
}
