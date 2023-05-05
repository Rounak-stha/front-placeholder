export default function LoadingItemContainer() {
	return (
		<div className='animate-pulse border border-bdr-light rounded-md'>
			<div className='h-48 bg-gray-200 dark:bg-gray-700 mb-2 rounded-t-md'></div>
			<div className='mx-2.5 my-3'>
				<div className='flex justify-between mb-2.5'>
					<div className='h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-4/5'></div>
					<div className='h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-1/6 mb-2.5'></div>
				</div>
			</div>
			<span className='sr-only'>Loading...</span>
		</div>
	)
}
