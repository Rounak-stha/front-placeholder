import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Trash2 } from 'lucide-react'

export default function TodoDeleteAlert({ onClick }: { onClick: (e: React.MouseEvent<HTMLButtonElement>) => {} }) {
	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild>
				<button className='h-7 w-7 flex justify-center items-center rounded-md border-2 border-bdr-light hover:border-red-700 text-gray-800 hover:text-red-700'>
					<Trash2 size={15} fill='inherit' />
				</button>
			</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<AlertDialog.Overlay className='fixed inset-0' />
				<AlertDialog.Content className='p-2'>
					<AlertDialog.Title className='text-mauve12 m-0 text-[17px] font-medium'>
						Are you absolutely sure?
					</AlertDialog.Title>
					<AlertDialog.Description className='text-mauve11 mt-4 mb-5 text-[15px] leading-normal'>
						This action cannot be undone. This will permanently delete your account and remove your data
						from our servers.
					</AlertDialog.Description>
					<div className='flex justify-end gap-[25px]'>
						<AlertDialog.Cancel asChild>
							<button className='text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]'>
								Cancel
							</button>
						</AlertDialog.Cancel>
						<AlertDialog.Action asChild>
							<button
								onClick={onClick}
								className='text-red11 bg-red4 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]'
							>
								Delete
							</button>
						</AlertDialog.Action>
					</div>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	)
}
