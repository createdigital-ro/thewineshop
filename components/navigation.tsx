import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, AlertTriangle } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownNavigation } from '@/components/ui/dropdown-menu';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { prisma } from '@/prisma/client';

const Navigation = async () => {
	const houses = await prisma.house.findMany();
	return (
		<>
			<div className='p-4 bg-yellow-100 text-yellow-800 flex flex-col md:flex-row gap-2 items-center justify-center'>
				<AlertTriangle className='mr-auto w-6 h-6 md:mr-0' />
				<div className='flex flex-col text-sm font-semibold leading-4'>
					<span>
						Website-ul este inca in <b>constructie</b>.
					</span>
					<span className='gap-1 decoration-yellow-800'>
						Pentru comenzi apleati{' '}
						<Link className='underline decoration-yellow-800 font-bold' href='tel:+400722302000'>
							0722302000
						</Link>{' '}
						sau contactati-ne prin email la{' '}
						<Link className='underline decoration-yellow-800 font-bold' href='mailto:office@thewineshop.ro'>
							office@thewineshop.ro
						</Link>
					</span>
				</div>
			</div>
			<nav className='px-8 py-4 flex items-center justify-between sticky right-0 top-0 w-full bg-white z-50'>
				<Link href={'/'}>
					<Image src={'/tws_logo.svg'} height={50} width={80} alt='TheWineShop Logo' />
				</Link>
				<div className='gap-4 text-lg font-semibold hidden sm:flex'>
					<DropdownMenu>
						<DropdownMenuTrigger className='flex items-center gap-1'>
							<div className='flex items-center gap-1'>
								Crama <ChevronDown />
							</div>
						</DropdownMenuTrigger>
						<DropdownNavigation houses={houses} mobile={false} />
					</DropdownMenu>
					<Link href={'/povestea-noastra'}>Povestea Noastra</Link>
				</div>
				<div className='flex gap-4'>
					{/* <ShoppingCartComponent /> */}
					{/* <UserDropdown /> */}
					{/* <Search /> */}
					<div />
					<div />
					<div />
					<div />
					<div className='flex gap-2 items-center'>
						<Sheet>
							<SheetTrigger className='block sm:hidden'>
								<Menu className='' />
							</SheetTrigger>
							<SheetContent>
								<SheetClose asChild>
									<Link href={'/'}>
										<Image
											className='mb-8'
											src={'/tws_logo.svg'}
											height={80}
											width={120}
											alt='TheWineShop Logo'
										/>
									</Link>
								</SheetClose>
								<DropdownMenu>
									<DropdownMenuTrigger
										asChild
										className='flex items-center gap-1 text-3xl font-semibold'
									>
										<span>
											Crama <ChevronDown />
										</span>
									</DropdownMenuTrigger>
									<DropdownNavigation houses={houses} mobile={true} />
								</DropdownMenu>
								<Link href={'/povestea-noastra'}>Povestea Noastra</Link>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
