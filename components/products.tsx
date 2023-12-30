import Link from 'next/link';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { AddToCartButton } from '@/components/cart/ui';
import { CompleteWine } from '@/prisma/zod';
import { AspectRatio } from './ui/aspect-ratio';

const ProductItem = ({ wine }: { wine: CompleteWine }) => {
	return (
		<div key={wine.id} className='bg-muted w-full border border-primary/10 select-text flex flex-col h-full'>
			<Link href={`/vinuri/${wine.slug}`} className='p-6 relative'>
				<span
					className={`absolute ${
						!wine.recommended && 'hidden'
					} top-0 left-0 text-xs bg-red-500 px-4 py-1 z-20 text-white uppercase font-semibold`}
				>
					{wine.recommended && 'Recomandat'}
				</span>
				<AspectRatio ratio={9 / 13}>
					{wine.image && (
						<Image
							placeholder='empty'
							src={wine.image}
							alt={`Imagine pentru vinul ${wine.name}`}
							fill
							sizes='(max-width: 768px) 80vw, (max-width: 1200px) 70vw, 60vw'
							loading={'eager'}
							className='w-full object-cover object-center'
						/>
					)}
				</AspectRatio>
			</Link>
			<div className='p-4 relative flex flex-col bg-neutral-200/70 h-full'>
				<Link href={`/vinuri/${wine.slug}`}>
					<p className='text-2xl leading-6 mt-2'>{wine.name}</p>
					<Badge className='uppercase text-xs absolute -top-3 right-2'>{wine.collection.name}</Badge>
					<span className='text-sm uppercase'>{wine.house.name}</span>
				</Link>

				<div className='font-semibold pt-4 mt-auto text-lg flex items-center justify-between'>
					{wine.price} LEI
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
