import LoadingItemContainer from './components/LoadingItemContainer'

export default function Loading() {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
			{[1, 2, 3, 4, 5, 6].map((i) => (
				<LoadingItemContainer key={i} />
			))}
		</div>
	)
}
