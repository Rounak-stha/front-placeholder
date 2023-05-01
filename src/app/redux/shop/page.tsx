import { ShopItems, setInitialShopItems } from '../features/shop/shopSlice'
import ItemContainer from './components/ShopItem'
import { store } from '@/store'
import ShopItemsPreloader from './components/ShopItemPreloader'

const SERVER_URL = process.env.SERVER_URL

// Async components are automatically wrapped around a Suspence Boundary with the loading.tsx page as the loading page
// When the route is directly opened, the page is initially already filled with prefetched data
// On client side navigation the loading component is displayed until the async component loads

const allShopData = [
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

async function Page() {
	const shopData: ShopItems = allShopData
	store.dispatch(setInitialShopItems(shopData))

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
			<ShopItemsPreloader shopData={shopData} />
			{shopData.map((item) => (
				<ItemContainer key={item.id} SItem={item} />
			))}
		</div>
	)
}

export default Page
