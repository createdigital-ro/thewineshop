import ProductItem from '@/components/products';
import Image from 'next/image';

import { prisma } from '@/prisma/client';
import { CompleteWine } from '@/prisma/zod';
import PaginationComponent from '@/components/pagination';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { unstable_noStore } from 'next/cache';

const ShoppingPage = async ({ searchParams: { crama, p } }: { searchParams: { crama: number; p: number } }) => {
	unstable_noStore();
	const zodParsedHouse = z.coerce.number().nonnegative().optional().parse(crama);

	const pages = Math.floor(
		(await prisma.wine.count({
			where: {
				houseId: zodParsedHouse,
			},
		})) / 12
	);

	const zodParsedPage = z.coerce
		.number()
		.nonnegative()
		.max(pages)
		.catch(() => {
			redirect('/vinuri');
		})
		.optional()
		.parse(p);

	let wines = (await prisma.wine.findMany({
		where: {
			houseId: zodParsedHouse,
		},
		include: {
			house: true,
			collection: true,
		},
		skip: (zodParsedPage! * 12) | 0,
		take: 12,
	})) as CompleteWine[];
	if (!wines) return <div>Nu exista niciun vin din aceasta crama.</div>;

	const house =
		crama &&
		(await prisma.house.findUnique({
			where: {
				id: zodParsedHouse,
			},
		}));
	return (
		<>
			{!house ? (
				<div className='my-8 font-semibold'>
					<h1 className='text-3xl text-center pb-1'>Descopera sortimentele noastre de vin</h1>
					<p className='text-lg text-center max-w-3xl mx-auto'>
						Fiecare sortiment de vin este rezultatul unei combinaţii inedite între expresivitatea soiului de
						strugure, solul specific zonei, condiţiile climatice din anul recoltei şi talentul
						vinificatorului
					</p>
				</div>
			) : (
				<div className='my-8 font-semibold'>
					{house.image && (
						<Image
							src={house.image}
							alt={`Imagine pentru via ${house?.name}`}
							width={800}
							height={800}
							className='rounded mx-auto mb-8'
						/>
					)}
					<h1 className='text-3xl text-center pb-1'>{house.name}</h1>
					<p className='text-lg text-center max-w-3xl mx-auto'>{house.description}</p>
				</div>
			)}

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				{wines.map((wine) => {
					if (crama && wine.house.id == crama) return <ProductItem key={wine.id} wine={wine} />;

					if (!crama) return <ProductItem key={wine.id} wine={wine} />;
				})}
			</div>
			{pages > 0 && <PaginationComponent page={p | 0} totalPages={pages} />}
		</>
	);
};

export default ShoppingPage;
