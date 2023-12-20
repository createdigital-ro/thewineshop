'use client';

import { Wine } from '@/types/sanity.data';
import { ShoppingBasket } from 'lucide-react';

const AddToCartButton = ({ wine }: { wine: Wine }) => {
	return (
		<div className='p-1 bg-primary text-primary-foreground rounded'>
			<ShoppingBasket />
		</div>
	);
};

export { AddToCartButton };
