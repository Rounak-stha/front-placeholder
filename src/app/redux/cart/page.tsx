import ItemContainer from './ItemContainer'

const Page = async () => {
	await new Promise((res) => setTimeout(() => res(1), 2000))
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
			{[1, 2, 3, 4, 5, 6].map(() => (
				<ItemContainer />
			))}
		</div>
	)
}

export default Page
