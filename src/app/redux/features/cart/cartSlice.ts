import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { ShopItem as CartItem } from '../shop/shopSlice'

export type CartItems = CartItem[]

export type CartState = {
	items: CartItems
}

const initialState: CartState = {
	items: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem(state, action: PayloadAction<CartItem>) {
			const existingItem = state.items.find((item) => item.id === action.payload.id)
			if (existingItem) {
			} else state.items.push(action.payload)
		},

		removeCartItem(state, action: PayloadAction<string>) {
			const index = state.items.findIndex((item) => item.id === action.payload)
			if (index !== -1) state.items.splice(index, 1)
		},

		incrementCartItemCount(state, action: PayloadAction<string>) {
			const cartItem = state.items.find((item) => item.id === action.payload)
			if (cartItem) cartItem.count += 1
		},
		decrementCartItemCount(state, action: PayloadAction<string>) {
			const cartItem = state.items.find((item) => item.id === action.payload)
			if (cartItem) cartItem.count -= 1
		}
	}
})

export const { addCartItem, removeCartItem, incrementCartItemCount, decrementCartItemCount } = cartSlice.actions

const cartReducer = cartSlice.reducer

export default cartReducer
