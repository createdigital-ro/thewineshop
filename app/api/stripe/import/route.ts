import Stripe from 'stripe';
import { prisma } from '@/prisma/client';
import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs';

export const POST = async () => {
	const user = await currentUser();
	const metadata: any = user?.publicMetadata;
	if (!metadata.roles.editor) return NextResponse.json({ success: false }, { status: 400 });

	const stripe = new Stripe(process.env.STRIPE_SECRET!, {
		typescript: true,
	});
	const wines = await prisma.wine.findMany({ skip: 40, take: 10 });
	wines.map(async (wine) => {
		const prod = await stripe.products.create({
			name: wine.name,
			default_price_data: {
				currency: 'RON',
				unit_amount: wine.price * 100,
			},
			images: [wine.image],
			metadata: {
				db_id: wine.id,
			},
		});
		console.log(prod);
		await prisma.wine.update({
			where: {
				id: wine.id,
			},
			data: {
				price_id: prod.default_price as string,
			},
		});
		return wine;
	});
	return NextResponse.json({ success: true }, { status: 200 });
};
