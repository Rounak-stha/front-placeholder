'use client'

import { useRef } from 'react'
import { store } from '@/store'
import { setInitialShopItems } from '../../features/shop/shopSlice'
import type { ShopItems } from '../../features/shop/shopSlice'

/**
 * Loads the Shop data fetched from server into the client store
 */
export default function ShopItemsPreloader({ shopData }: { shopData: ShopItems }) {
	const loaded = useRef(false)
	if (!loaded.current) {
		store.dispatch(setInitialShopItems(shopData))
		loaded.current = true
	}
	return null
}
