'use client';

import { useClerk, useUser } from '@clerk/nextjs';
import { Avatar, AvatarImage } from '../ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from '../ui/dropdown-menu';
import Link from 'next/link';
import { User, LogOut, UserCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { AvatarFallback } from '@radix-ui/react-avatar';

const UserDropdown = () => {
	const { signOut, redirectToSignUp } = useClerk();
	const { isLoaded, user, isSignedIn } = useUser();
	const router = useRouter();
	if (!isLoaded) return <div className='animate-spin border-y-2 border-primary w-6 h-6 rounded-full' />;
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger
					onClick={() => !isSignedIn && redirectToSignUp({ redirectUrl: 'http://localhost:3000/contul-meu' })}
				>
					<Avatar className='w-6 h-6'>
						<AvatarImage src={user?.imageUrl} />
						<AvatarFallback>
							<UserCircle />
						</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				{isSignedIn && (
					<DropdownMenuContent>
						<Link href='/contul-meu'>
							<DropdownMenuLabel className='text-md font-medium flex gap-1 items-center'>
								<User className='w-4 h-4' />
								Contul meu
							</DropdownMenuLabel>
						</Link>
						<DropdownMenuSeparator />
						<DropdownMenuLabel
							onClick={() => signOut(() => router.push('/'))}
							className='text-md font-medium flex gap-1 items-center cursor-pointer'
						>
							<LogOut className='w-4 h-4' />
							Delogheaza-te
						</DropdownMenuLabel>
					</DropdownMenuContent>
				)}
			</DropdownMenu>
		</div>
	);
};

export { UserDropdown };
