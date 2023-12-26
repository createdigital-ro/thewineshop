import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const AdminNavigation = () => {
	return (
		<>
			<h1 className='text-3xl font-semibold mb-6'>Studio</h1>
			<div className='flex flex-col gap-4'>
				<Link href='/studio/add'>
					<NavButton>Add single wine</NavButton>
				</Link>
				<Link href='/studio/bulk-add'>
					<NavButton>Bulk add</NavButton>
				</Link>
				<Link href='/studio/cache'>
					<NavButton>Manage cache</NavButton>
				</Link>
			</div>
		</>
	);
};

const NavButton = ({ children }: PropsWithChildren) => (
	<Button variant={'outline'} className='text-center w-full'>
		{children}
	</Button>
);

export default AdminNavigation;
