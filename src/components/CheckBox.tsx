'use client'
import { useState } from 'react'
import { Check } from 'lucide-react'

interface Props {
	checked: boolean
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	id?: string
	className?: string
	width?: number
	height?: number
}

type CheckedChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void

const CheckBox = ({ checked, className, id, onChange, width, height }: Props) => {
	const [iChecked, setIchecked] = useState(checked)
	const handleChange: CheckedChangeHandler = (e) => {
		setIchecked(e.currentTarget.checked)
		onChange && onChange(e)
	}
	// if checkbox is in a flexible items, shrink-0 will make sure that the checkbox retains its size
	return (
		<div
			className={`relative text-blue-600 shrink-0 ${className}`}
			style={{ width: width ? String(width) + 'px' : '20px', height: height ? String(height) + 'px' : '20px' }}
		>
			<input className='peer hidden' type='checkbox' checked={iChecked} id={id} onChange={handleChange} />

			<div
				className='absolute top-0 left-0 flex justify-center items-center peer-checked:visible invisible'
				style={{
					width: width ? String(width) + 'px' : '20px',
					height: height ? String(height) + 'px' : '20px'
				}}
			>
				<Check size={16} />
			</div>
		</div>
	)
}

export default CheckBox
