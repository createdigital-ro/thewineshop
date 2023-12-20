import { AddToCartButton } from '@/components/cart/ui';
import { Badge } from '@/components/ui/badge';
import { client } from '@/sanity/lib/client';
import { Wine } from '@/types/sanity.data';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60; // revalidate every 1 min

const ShoppingPage = async () => {
	const query = `*[_type == "wine"]{
        _id,
        name,
        "imageUrl": image.asset->url,
		"blurUrl": image.asset->.metadata.lqip,
        "houseName": houseRef->name,
        "collectionName": collectionRef->name,
        year,
        price,
		"slug": slug.current
    	}`;
	const wines: Wine[] = await client.fetch(query);
	console.log(wines);

	return (
		<>
			<div className='my-8 font-semibold'>
				<h1 className='text-3xl text-center'>Descopera sortimentele noastre de vin</h1>
				<p className='text-lg text-center max-w-3xl mx-auto'>
					Fiecare sortiment de vin este rezultatul unei combinaţii inedite între expresivitatea soiului de
					strugure, solul specific zonei, condiţiile climatice din anul recoltei şi talentul vinificatorului
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				{[...wines, ...wines, ...wines].map((wine) => {
					return (
						<div key={wine._id} className='bg-muted w-full shadow-md shadow-primary/5'>
							<Link href={`/vinuri/${wine.slug}`} className=''>
								<Image
									placeholder='blur'
									blurDataURL={wine.blurUrl}
									src={wine.imageUrl}
									alt={`Imagine pentru vinul ${wine.name}`}
									width={300}
									height={300}
									className='w-full'
								/>
							</Link>
							<div className='p-4 relative '>
								<Link href={`/vinuri/${wine.slug}`}>
									<p className='text-2xl leading-5 mt-2'>{wine.name}</p>
									<Badge className='uppercase text-xs absolute -top-3 right-2'>
										{wine.collectionName}
									</Badge>
									<span className='text-sm uppercase'>{wine.houseName}</span>
								</Link>

								<div className='font-semibold pt-4 text-lg flex items-center justify-between'>
									{wine.price} LEI
									<AddToCartButton wine={wine} />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ShoppingPage;
