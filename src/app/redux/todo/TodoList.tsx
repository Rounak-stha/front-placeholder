import { useAppSelector } from '@/hooks'
import TodoListItem from './TodoListItem'
import { selectFilteredTodoIds } from '../features/todo/todoSlice'
import { AnimatePresence, motion } from 'framer-motion'

export default function TodoList() {
	const todos = useAppSelector(selectFilteredTodoIds)

	return (
		<AnimatePresence initial={false}>
			{todos.map((id) => (
				<motion.div key={id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: -300, opacity: 0 }}>
					<TodoListItem id={id} />
				</motion.div>
			))}
		</AnimatePresence>
	)
}
