import Cart from './components/Cart'

export default function CartLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className='flex items-center'>
				<div className='flex-1'>
					<p className='font-bold text-xl'>Shop Fun</p>
				</div>
				<Cart />
			</div>
			<hr className='my-3 border-gray-800' />
			{children}
		</>
	)
}
