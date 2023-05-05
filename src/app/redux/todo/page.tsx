'use client'

import TodoList from './TodoList'
import TodosFilter from './TodosFilter'
import NewTodoInput from './NewTodoInput'

const Page = () => {
	return (
		<div>
			<div className='mb-3 flex'>
				<h2 className='text-lg flex-1'>Create your Todos</h2>
				<div className='h-7 w-7 flex justify-center items-center rounded-md border-2 border-bdr-light'>
					<TodosFilter />
				</div>
			</div>
			<div className='mb-3 flex gap-2'>
				<NewTodoInput />
			</div>
			<TodoList />
		</div>
	)
}

export default Page
