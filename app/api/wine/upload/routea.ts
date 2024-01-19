// import { prisma } from '@/prisma/client';
// import { WineModel } from '@/prisma/zod';
// import { redis } from '@/redis/init';
// import { type NextRequest, NextResponse } from 'next/server';

// export const POST = async (req: NextRequest) => {
// 	const body = await req.json();
// 	const parsedBody = WineModel.safeParse(body);
// 	if (!parsedBody.success) return NextResponse.json(body);
// 	const res = await prisma.wine.create({
// 		data: {
// 			...parsedBody.data,
// 		},
// 		include: {
// 			house: true,
// 			collection: true,
// 		},
// 	});
// 	await redis.lpush('wines', { ...res });
// 	if (res.recommended) redis.lpush('recommended_wines', { ...res });
// 	return NextResponse.json('Wine uploaded succesfully.', { status: 200 });
// };
