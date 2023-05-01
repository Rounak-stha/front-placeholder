import { ShopItems, setInitialShopItems } from '../features/shop/shopSlice'
import ItemContainer from './components/ShopItem'
import { store } from '@/store'
import ShopItemsPreloader from './components/ShopItemPreloader'

const SERVER_URL = process.env.SERVER_URL

// Async components are automatically wrapped around a Suspence Boundary with the loading.tsx page as the loading page
// When the route is directly opened, the page is initially already filled with prefetched data
// On client side navigation the loading component is displayed until the async component loads

async function Page() {
	const res = await fetch(`${SERVER_URL}/api/shop`, { cache: 'no-store' })
	if (res.status !== 200) throw 'Error'
	const shopData: ShopItems = await res.json()
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
