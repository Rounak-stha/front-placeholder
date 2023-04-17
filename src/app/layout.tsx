import Container from '@/ui/Container'
import Nav from '@/ui/Nav'
import './globals.css'
import RootProvider from '@/components/RootProvider'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`p-4 ${roboto.className}`}>
				<div className='xl:w-2/3 lg:w-3/4 mx-auto'>
					<RootProvider>
						<Container>
							<div className='mb-3'>
								<Nav
									items={[
										{ name: 'About', link: '/' },
										{ name: 'Redux', link: '/redux' }
									]}
								/>
							</div>
							{children}
						</Container>
					</RootProvider>
				</div>
			</body>
		</html>
	)
}
