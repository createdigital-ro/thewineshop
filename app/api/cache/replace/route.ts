import { prismaGetCompleteRecommendedWines, prismaGetCompleteWines } from '@/prisma/utils/fetch';
import { redis } from '@/redis/init';
import { currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export const POST = async () => {
	console.log('CACHE: Called replenish');
	const user = await currentUser();
	const metadata: any = user?.publicMetadata;
	if (!metadata.roles.editor) return NextResponse.json('Not authorized', { status: 400 });

	await redis.del('wines', 'recommended_wines');
	const recommendedWines = await prismaGetCompleteRecommendedWines();
	const wines = await prismaGetCompleteWines();
	await redis.lpush('recommended_wines', ...recommendedWines);
	await redis.lpush('wines', ...wines);
	console.log('CACHE: Replace was done succesfully.');
	return NextResponse.json('Cache replenished succesfully', { status: 200 });
};
