import { prisma } from '../client';

const prismaGetCompleteRecommendedWines = async () => {
	const recommended = await prisma.wine.findMany({
		where: {
			recommended: true,
		},
		include: {
			house: true,
			collection: true,
		},
	});
	return recommended;
};

const prismaGetCompleteWines = async () => {
	const wines = await prisma.wine.findMany({
		include: {
			house: true,
			collection: true,
		},
	});
	return wines;
};

const prismaGetHouses = async () => {
	const houses = await prisma.house.findMany();
	return houses;
};

const prismaGetCollections = async () => {
	const collections = await prisma.collection.findMany();
	return collections;
};

export { prismaGetCompleteRecommendedWines, prismaGetCompleteWines, prismaGetHouses, prismaGetCollections };
