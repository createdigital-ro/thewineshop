import ProductItem from '@/components/products';
import Image from 'next/image';

import { prisma } from '@/prisma/client';
import { CompleteWine } from '@/prisma/zod';
import PaginationComponent from '@/components/pagination';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Vinuri - TheWineShop',
	description:
		'Explorați diversitatea noastră captivantă de vinuri pe pagina de vinuri TheWineShop. De la vinuri roșii robuste până la vinuri albe rafinate și spumante vibrante, gama noastră cuprinzătoare satisface orice palat. Alegeți din selecția noastră globală de vinuri, inclusiv soiuri rare și ediții limitate. Fiecare vin este descris detaliat pentru a vă ajuta în alegerea ideală. Cumpărături ușoare, informații experte și livrare rapidă. Descoperiți acum lumea vinurilor de excepție la TheWineShop!',
};

const ShoppingPage = async ({ searchParams }: { searchParams: { id: number | undefined; p: number } }) => {
	const pages = Math.floor((await prisma.wine.count()) / 12);
	const zodParsedPage = z.coerce
		.number()
		.nonnegative()
		.max(pages)
		.catch(() => {
			redirect('/vinuri');
		})
		.optional()
		.parse(searchParams.p);
	let wines = (await prisma.wine.findMany({
		include: {
			house: true,
			collection: true,
		},
		skip: (zodParsedPage! * 12) | 0,
		take: 12,
	})) as CompleteWine[];
	const house =
		searchParams.id &&
		(await prisma.house.findUnique({
			where: {
				id: Number(searchParams.id),
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
					if (searchParams.id && wine.house.id == searchParams.id)
						return <ProductItem key={wine.id} wine={wine} />;

					if (!searchParams.id) return <ProductItem key={wine.id} wine={wine} />;
				})}
			</div>
			<PaginationComponent page={searchParams.p | 0} totalPages={pages} />
		</>
	);
};

export default ShoppingPage;
