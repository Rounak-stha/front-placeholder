'use client'
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
					<p
						className={`inline-block text-sm px-4 py-[6px] rounded-lg ${
							segment?.toLowerCase() === i.name.toLowerCase() ? 'bg-blue-500' : 'border border-gray-800'
						}`}
					>
						{i.name}
					</p>
				</Link>
			))}
		</div>
	)
}

export default Nav
