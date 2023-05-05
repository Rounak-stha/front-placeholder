import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { SlidersHorizontal, ChevronRight } from 'lucide-react'

type SingleItem = { name: string; action: () => void }

type Item = SingleItem | { name: string; subItems: SingleItem[] }

export type DropdownItems = Item[]

interface Props {
	items: DropdownItems
	icon: React.ReactNode
}

export default function DropDown({ items, icon }: Props) {
	return (
		<Dropdown.Root>
			<Dropdown.Trigger>{icon}</Dropdown.Trigger>
			<Dropdown.Portal>
				<Dropdown.Content align='end' className='rounded-sm bg-gray-950 p-1 border-2 border-bdr-light w-36'>
					{items.map((item, i) => {
						if ('subItems' in item) {
							return (
								<Dropdown.Sub key={item.name + String(i)}>
									<Dropdown.SubTrigger className='flex border-none outline-none cursor-pointer text-base leading-none px-2 py-2 rounded-sm text-gray-400 data-[highlighted]:bg-gray-800'>
										<span className='inline-block flex-1'>{item.name}</span>
										<span className='inline-block'>
											<ChevronRight size={17} />
										</span>
									</Dropdown.SubTrigger>
									<Dropdown.Portal>
										<Dropdown.SubContent
											className='rounded-md bg-gray-950 p-1 border-2 border-bdr-light w-36'
											sideOffset={4}
											alignOffset={0}
										>
											{item.subItems.map((t, i) => (
												<Dropdown.Item
													key={t.name + String(i)}
													onClick={t.action}
													className='border-none outline-none cursor-pointer leading-none my-[1px] px-2 py-2 rounded-sm text-gray-400 data-[highlighted]:bg-gray-800'
												>
													{t.name}
												</Dropdown.Item>
											))}
										</Dropdown.SubContent>
									</Dropdown.Portal>
								</Dropdown.Sub>
							)
						}
						return (
							<Dropdown.Item
								onClick={item.action}
								key={item.name + String(i)}
								className='border-none outline-none cursor-pointer leading-none my-[1px] px-2 pt-[7px] pb-2 rounded-sm text-gray-400 data-[highlighted]:bg-gray-800'
							>
								{item.name}
							</Dropdown.Item>
						)
					})}

					<Dropdown.Arrow className='border-red-400' />
				</Dropdown.Content>
			</Dropdown.Portal>
		</Dropdown.Root>
	)
}
