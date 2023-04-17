import Container from '@/ui/Container'
import Nav from '@/ui/Nav'

export default function ReduxLayout({ children }: { children: React.ReactNode }) {
	return (
		<Container>
			<div className='mb-4'>
				<Nav
					items={[
						{ name: 'Todo', link: '/redux/todo' },
						{ name: 'Cart', link: '/redux/cart' }
					]}
				/>
			</div>
			<Container>{children}</Container>
		</Container>
	)
}
