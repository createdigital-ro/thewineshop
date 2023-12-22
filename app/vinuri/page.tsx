import ProductItem from '@/components/products';
import { prisma } from '@/prisma/client';
import Image from 'next/image';

export const revalidate = 60; // revalidate every 1 min

const ShoppingPage = async ({ searchParams }: { searchParams: { house: string } }) => {
	const wines = await prisma.wine.findMany({
		include: {
			house: true,
			collection: true,
		},
	});
	const hosue = searchParams.house;
	return (
		<>
			{!searchParams.house ? (
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
					<Image
						src={house.imageUrl}
						alt={`Imagine pentru via ${house.name}`}
						width={800}
						height={800}
						className='rounded mx-auto mb-8'
					/>
					<h1 className='text-3xl text-center pb-1'>{house.name}</h1>
					<p className='text-lg text-center max-w-3xl mx-auto'>{house.description}</p>
				</div>
			)}

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				{wines.map((wine) => {
					return <ProductItem key={wine.id} wine={wine} />;
				})}
			</div>
		</>
	);
};

export default ShoppingPage;
