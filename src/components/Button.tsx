import clsx from 'clsx'
import { cva, VariantProps } from 'cva'

const buttonStyles = cva('flex justify-center items-center text-sm px-4 py-[6px] rounded-lg', {
	variants: {
		intent: {
			primary: 'bg-primary-500',
			outlined: 'border border-bdr-light',
			danger: 'bg-danger-500'
		},
		fullWidth: {
			true: 'w-full'
		}
	},
	defaultVariants: {
		intent: 'primary'
	}
})

export interface Props extends VariantProps<typeof buttonStyles> {
	text: string
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ intent, fullWidth, text, onClick }: Props) {
	return (
		<button
			onClick={(e) => {
				onClick && onClick(e)
			}}
			className={buttonStyles({ intent, fullWidth })}
		>
			{text}
		</button>
	)
}
