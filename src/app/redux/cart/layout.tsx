import { ShoppingCart } from 'lucide-react'

export default function CartLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className='flex items-center'>
				<div className='flex-1'>
					<p className='font-bold text-xl'>Shop Fun</p>
				</div>
				<div className='h-10 w-10 flex items-center justify-center rounded-full border-2 border-gray-800'>
					<ShoppingCart size={18} />
				</div>
			</div>
			<hr className='my-3 border-gray-800' />
			{children}
		</>
	)
}
