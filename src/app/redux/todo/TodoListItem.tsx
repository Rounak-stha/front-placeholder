import CheckBox from '@/components/CheckBox'
import { toggleTodoState } from '../features/todo/todoSlice'
import { useAppDispatch, useAppSelector } from '@/hooks'
import TodoItemOptions from './TodoItemOptions'
import { motion } from 'framer-motion'

export default function TodoListItem({ id }: { id: number }) {
	const dispatch = useAppDispatch()
	const todo = useAppSelector((state) => state.todo.todos.find((t) => t.id === id))
	if (!todo) return <></>
	const { text, completed, color } = todo
	const todoId = 'todoItem-' + String(id)
	return (
		<div
			className={`flex items-center py-2 px-3 bg-[#040720] my-2 rounded-md 
					${color === 'Red' && 'bg-red-900 text-red-200'} 
					${color === 'Blue' && 'bg-blue-900 text-blue-200'} 
					${color === 'Green' && 'bg-green-900 text-green-200'}
				`}
		>
			<div className='flex items-center gap-3 flex-1'>
				<CheckBox
					className='bg-slate-50 rounded-sm'
					checked={completed}
					onChange={() => dispatch(toggleTodoState(id))}
					id={todoId}
				/>

				<p className={`break-all ${completed && 'line-through'}`}>
					<label htmlFor={todoId}>{text}</label>
				</p>
			</div>
			<div
				className={`
						${color === 'Red' && 'text-red-200'} 
						${color === 'Blue' && 'text-blue-200'} 
						${color === 'Green' && 'text-green-200'}
					`}
			>
				<TodoItemOptions id={id} />
			</div>
		</div>
	)
}
