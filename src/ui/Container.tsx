interface Props {
	children: React.ReactNode
}
export default function Container({ children }: Props) {
	return <div className='p-4 border border-gray-800 rounded-md'>{children}</div>
}
