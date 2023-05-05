'use client'
import Button from '@/components/Button'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

interface Props {
	items: { name: string; link: string }[]
}

const Nav = ({ items }: Props) => {
	let segment = useSelectedLayoutSegment()
	if (!segment) segment = 'about'
	return (
		<div className='flex gap-4'>
			{items.map((i) => (
				<Link key={i.name} href={i.link}>
					<Button
						text={i.name}
						intent={segment?.toLowerCase() === i.name.toLowerCase() ? 'primary' : 'outlined'}
					/>
				</Link>
			))}
		</div>
	)
}

export default Nav
