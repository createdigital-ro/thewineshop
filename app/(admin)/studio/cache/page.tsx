'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ManageCachePage = () => {
	const handleReplace = async () => {
		const res = await fetch('/api/cache/replace', { method: 'POST' });
		const body = await res.json();
		toast(body);
	};
	return (
		<>
			<h2 className='text-4xl my-4'>Cache settings</h2>
			<Button variant={'destructive'} onClick={handleReplace}>
				Replenish Cache
			</Button>
		</>
	);
};

export default ManageCachePage;
