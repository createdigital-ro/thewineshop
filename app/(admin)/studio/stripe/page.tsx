'use client';

import { Button } from '@/components/ui/button';

const StripeExportPage = () => {
	const handleClickImport = async () => {
		const res = await fetch('/api/stripe/import', { method: 'POST' });
		const data = await res.json();
	};
	const handleClickArchive = async () => {
		const res = await fetch('/api/stripe/archive', { method: 'POST' });
		const data = await res.json();
	};
	return (
		<div>
			<Button onClick={handleClickImport}>Add to Stripe</Button>
			<Button onClick={handleClickArchive}>Archive 15 prods</Button>
		</div>
	);
};

export default StripeExportPage;
