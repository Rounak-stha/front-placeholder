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
			<hr className='mt-3 mb-4 border-bdr-light' />
			{children}
		</>
	)
}
