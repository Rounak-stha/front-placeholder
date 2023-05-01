import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './app/redux/features/todo/todoSlice'
import shopReducer from './app/redux/features/shop/shopSlice'
import cartReducer from './app/redux/features/cart/cartSlice'

export const store = configureStore({
	reducer: {
		todo: todoReducer,
		shop: shopReducer,
		cart: cartReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
