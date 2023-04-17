import Image from 'next/image'

export default function ItemContainer() {
	return (
		<div className='border border-gray-800'>
			<div className='relative h-40'>
				<Image
					className='rounded-sm mb-2'
					alt='Macbook'
					src='https://images.unsplash.com/photo-1588053631229-d04fd47cf0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjc2V0dXB8ZW58MHx8MHx8&w=1000&q=80'
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div className='mx-2.5 my-3'>
				<div className='flex mb-1 font-bold'>
					<p className='flex-1 '>Macbook</p>
					<p className='text-sm'>$1999</p>
				</div>
				<div className=' flex'>
					<p className='flex-1'>Items: 5</p>
					<button className='px-2 py-1 text-sm bg-blue-500 rounded-sm'>Add to Cart</button>
				</div>
			</div>
		</div>
	)
}
