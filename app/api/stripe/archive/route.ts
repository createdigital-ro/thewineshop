import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs';

export const POST = async () => {
	const user = await currentUser();
	const metadata: any = user?.publicMetadata;
	if (!metadata.roles.editor) return NextResponse.json({ success: false }, { status: 400 });

	const stripe = new Stripe(process.env.STRIPE_SECRET!, {
		typescript: true,
	});

	const products = await stripe.products.list({ limit: 15, active: true });
	products.data.map(async (prod) => {
		await stripe.products.update(prod.id, {
			active: false,
		});
	});

	return NextResponse.json({ success: true }, { status: 200 });
};
