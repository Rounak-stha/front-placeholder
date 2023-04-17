import { useAppDispatch } from '@/hooks'
import DropDown from '@/ui/DropDown'
import { setColorFilter, setShowFilter } from '../features/todo/todoSlice'
import { SlidersHorizontal } from 'lucide-react'

export default function TodosFilter() {
	const dispatch = useAppDispatch()
	const items = [
		{
			name: 'State',
			subItems: [
				{ name: 'All', action: () => dispatch(setShowFilter('All')) },
				{
					name: 'Completed',
					action: () => dispatch(setShowFilter('Completed'))
				},
				{
					name: 'Uncompleted',
					action: () => dispatch(setShowFilter('Uncompleted'))
				}
			]
		},
		{
			name: 'Color',
			subItems: [
				{ name: 'All', action: () => dispatch(setColorFilter('All')) },
				{
					name: 'Red',
					action: () => dispatch(setColorFilter('Red'))
				},
				{
					name: 'Green',
					action: () => dispatch(setColorFilter('Green'))
				},
				{
					name: 'Blue',
					action: () => dispatch(setColorFilter('Blue'))
				}
			]
		}
	]
	return <DropDown items={items} icon={<SlidersHorizontal size={14} />} />
}
