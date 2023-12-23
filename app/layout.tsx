import { CartProviderClient } from '@/components/cart/ui';
import { ClerkProvider } from '@clerk/nextjs';
import { Nunito } from 'next/font/google';

import '@/app/globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ro'>
			<body className={nunito.className}>
				<ClerkProvider>
					<CartProviderClient>{children}</CartProviderClient>
				</ClerkProvider>
			</body>
		</html>
	);
}
