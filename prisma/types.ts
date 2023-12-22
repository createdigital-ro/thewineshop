import { Prisma } from '@prisma/client';

export type Wine = Prisma.WineGetPayload<{
	include: {
		house: true;
		collection: true;
	};
}>;

export type RecommendedWine = Prisma.WineGetPayload<{
	where: {
		recommended: true;
	};
	include: {
		house: true;
		collection: true;
	};
}>;
