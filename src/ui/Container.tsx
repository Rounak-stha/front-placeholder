interface Props {
	children: React.ReactNode
}
export default function Container({ children }: Props) {
	return <div className='p-4 border border-bdr-light rounded-md'>{children}</div>
}
