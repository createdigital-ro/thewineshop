import { TWSUserMetadata } from '@/clerk/user';
import AdminNavigation from '@/components/studio/ui/navigation';
import { Toaster } from '@/components/ui/sonner';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const user = await currentUser();
	const userMetadata: any = user?.publicMetadata;
	if (userMetadata?.roles?.editor && user?.id)
		return (
			<>
				<div className='grid grid-cols-5 gap-12 m-8'>
					<div className='col-span-5 md:col-span-1'>
						<AdminNavigation />
					</div>
					<div className='col-span-5 md:col-span-4'>{children}</div>
				</div>
				<Toaster richColors position='top-center' />
			</>
		);
	return redirect('/');
}
