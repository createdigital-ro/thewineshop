import Link from 'next/link';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { AddToCartButton } from '@/components/cart/ui';
import { CompleteWine } from '@/prisma/zod';
import { AspectRatio } from './ui/aspect-ratio';

const ProductItem = ({ wine }: { wine: CompleteWine }) => {
	return (
		<div key={wine.id} className='bg-muted w-full shadow-md shadow-primary/5'>
			<Link href={`/vinuri/${wine.slug}`} className=''>
				<AspectRatio ratio={9 / 13}>
					<Image
						placeholder='empty'
						src={wine.image}
						alt={`Imagine pentru vinul ${wine.name}`}
						fill
						loading={'eager'}
						className='w-full object-cover'
					/>
				</AspectRatio>
			</Link>
			<div className='p-4 relative '>
				<Link href={`/vinuri/${wine.slug}`}>
					<p className='text-2xl leading-5 mt-2'>{wine.name}</p>
					<Badge className='uppercase text-xs absolute -top-3 right-2'>{wine.collection.name}</Badge>
					<span className='text-sm uppercase'>{wine.house.name}</span>
				</Link>

				<div className='font-semibold pt-4 text-lg flex items-center justify-between'>
					{wine.price} LEI
					<AddToCartButton wine={wine} />
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
