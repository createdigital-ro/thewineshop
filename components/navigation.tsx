import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Search, ChevronDown, Menu, UserCircle } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownNavigation } from '@/components/ui/dropdown-menu';
import { Sheet, SheetClose, SheetContent, SheetPortal, SheetTrigger } from '@/components/ui/sheet';
import { client } from '@/sanity/lib/client';
import { ShoppingCartComponent } from './cart/ui';
import { prisma } from '@/prisma/client';

const Navigation = async () => {
	const houses = await prisma.house.findMany();
	return (
		<nav className='px-8 py-4 flex items-center justify-between sticky right-0 top-0 w-full bg-white z-20'>
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
				<ShoppingCartComponent />
				<UserCircle />
				<Search />
				<div className='flex gap-2'>
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
								<DropdownMenuTrigger asChild className='flex items-center gap-1 text-3xl font-semibold'>
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
	);
};

export default Navigation;
