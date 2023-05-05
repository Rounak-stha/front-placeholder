import Container from '@/ui/Container'
import Nav from '@/ui/Nav'
import './globals.css'
import RootProvider from '@/components/RootProvider'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] })

export const metadata = {
	title: 'All In One',
	description:
		'An app for testing out the brand new Nextjs 13 wth App Dir. App uses Redux with SSR and have plans for using GraphQL as well.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`p-4 ${rubik.className}`}>
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
