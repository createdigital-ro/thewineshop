import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AdminNavigation = () => {
	return (
		<div className='p-8 font-bold'>
			<Link href='/'>
				<Button variant={'outline'}>Main</Button>
			</Link>
		</div>
	);
};

export default AdminNavigation;
