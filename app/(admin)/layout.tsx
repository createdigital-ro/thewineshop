import { Toaster } from '@/components/ui/sonner';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const user = await currentUser();
	const userMetadata = user?.publicMetadata;
	if (userMetadata?.roles.editor && user?.id)
		return (
			<>
				{children}
				<Toaster richColors position='top-center' />
			</>
		);
	return redirect('/');
}