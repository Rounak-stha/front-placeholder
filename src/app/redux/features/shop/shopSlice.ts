import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type ShopItem = {
	id: string
	name: string
	image: string
	price: string
	currency: string
	count: number
}

export type ShopItems = ShopItem[]

export type ShopState = {
	items: ShopItems
}

const initialState: ShopState = {
	items: []
}

export const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		setInitialShopItems(state, action: PayloadAction<ShopItem[]>) {
			state.items = state.items.concat(action.payload)
		}
	}
})

export const { setInitialShopItems } = shopSlice.actions

export default shopSlice.reducer
