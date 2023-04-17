import { useAppDispatch } from '@/hooks'
import DropDown, { DropdownItems } from '@/ui/DropDown'
import { deleteTodo, setTodoColor } from '../features/todo/todoSlice'
import { MoreVertical } from 'lucide-react'

export default function TodoItemOptions({ id }: { id: number }) {
	const dispatch = useAppDispatch()
	const items: DropdownItems = [
		{
			name: 'Set Color',
			subItems: [
				{
					name: 'Red',
					action() {
						dispatch(setTodoColor({ id, color: 'Red' }))
					}
				},
				{
					name: 'Blue',
					action() {
						dispatch(setTodoColor({ id, color: 'Blue' }))
					}
				},
				{
					name: 'Green',
					action() {
						dispatch(setTodoColor({ id, color: 'Green' }))
					}
				}
			]
		},
		{
			name: 'delete',
			action() {
				dispatch(deleteTodo(id))
			}
		}
	]
	return <DropDown items={items} icon={<MoreVertical size={18} fill='inherit' />} />
}
