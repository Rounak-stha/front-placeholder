import { useAppDispatch } from '@/hooks'
import { useState } from 'react'
import { addTodo } from '../features/todo/todoSlice'
import { Plus } from 'lucide-react'

export default function NewTodoInput() {
	const [newTodoText, setNewTodoText] = useState('')
	const dispatch = useAppDispatch()
	function createTodo() {
		if (!newTodoText) return
		setNewTodoText('')
		dispatch(addTodo(newTodoText))
	}
	return (
		<>
			<input
				type='text'
				value={newTodoText}
				placeholder='New Todo?'
				className='bg-gray-800 px-3 py-2 rounded-md w-full outline-none outline-offset-0 focus:outline-blue-800'
				onChange={(e) => setNewTodoText(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						e.stopPropagation()
						createTodo()
					}
				}}
			/>
			<button onClick={() => createTodo()} className='flex px-3 py-1 rounded-md items-center bg-blue-500'>
				<span className='inline-block mr-2 text-sm'>Add</span>
				<Plus size={18} />
			</button>
		</>
	)
}
