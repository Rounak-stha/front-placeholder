import { RootState } from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

export type Todo = { id: number; text: string; completed: boolean; color: TodoColors }
export type TodoColors = 'Red' | 'Green' | 'Blue'
export type TodoShowFilters = 'All' | 'Completed' | 'Uncompleted'
export type TodoColorFilters = 'All' | TodoColors

export interface TodoState {
	todos: Todo[]
	todoFilters: {
		show: TodoShowFilters
		color: 'All' | TodoColors
	}
}

const initialState: TodoState = {
	todos: [
		{ id: 1, text: 'first toto', completed: false, color: 'Blue' },
		{ id: 2, text: 'second toto', completed: false, color: 'Green' }
	],
	todoFilters: {
		show: 'All',
		color: 'All'
	}
}

function nextTodoId(todos: Todo[]) {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
	return maxId + 1
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<string>) {
			const newId = nextTodoId(state.todos)
			state.todos.push({ id: newId, text: action.payload, completed: false, color: 'Blue' })
		},
		toggleTodoState(state, action: PayloadAction<number>) {
			const todo = state.todos.find((t) => t.id === action.payload)
			if (todo) todo.completed = !todo.completed
		},
		deleteTodo(state, action: PayloadAction<number>) {
			const index = state.todos.findIndex((t) => t.id === action.payload)
			state.todos.splice(index, 1)
		},
		setTodoColor(state, action: PayloadAction<{ id: number; color: TodoColors }>) {
			const foundTodo = state.todos.find((t) => t.id === action.payload.id)
			if (foundTodo) foundTodo.color = action.payload.color
		},
		setShowFilter(state, action: PayloadAction<TodoShowFilters>) {
			state.todoFilters.show = action.payload
		},
		setColorFilter(state, action: PayloadAction<TodoColorFilters>) {
			state.todoFilters.color = action.payload
		}
	}
})

export const selectFilteredTodos = createSelector(
	[(state: RootState) => state.todo.todos, (state: RootState) => state.todo.todoFilters],
	(todos, filters) => {
		let filteredTodos: Todo[] = []
		const todoStatus = filters.show
		const color = filters.color
		switch (todoStatus) {
			case 'All':
				filteredTodos = todos
				break
			case 'Completed':
				filteredTodos = todos.filter((t) => t.completed)
				break
			case 'Uncompleted':
				filteredTodos = todos.filter((t) => !t.completed)
		}
		switch (color) {
			case 'All':
				return filteredTodos
			case 'Red':
				return filteredTodos.filter((t) => t.color === 'Red')
			case 'Green':
				return filteredTodos.filter((t) => t.color === 'Green')
			case 'Blue':
				return filteredTodos.filter((t) => t.color === 'Blue')
		}
	}
)

export const selectFilteredTodoIds = createSelector(selectFilteredTodos, (fTodos) => fTodos.map((ft) => ft.id))

export const { addTodo, toggleTodoState, deleteTodo, setShowFilter, setTodoColor, setColorFilter } = todoSlice.actions

export default todoSlice.reducer
