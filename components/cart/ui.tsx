'use client';

import { Wine } from '@/types/sanity.data';
import { ShoppingBasket, ShoppingCart } from 'lucide-react';
import { ReactNode } from 'react';
import Image from 'next/image';

import { CartProvider, useShoppingCart } from 'use-shopping-cart';
import { Sheet, SheetContent, SheetDescription, SheetHeader } from '../ui/sheet';
import { type Product } from 'use-shopping-cart/core';
import { Button } from '../ui/button';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Badge } from '../ui/badge';

const AddToCartButton = ({ wine }: { wine: Wine }) => {
	const { addItem } = useShoppingCart();
	console.log(wine.imageUrl);
	const product: Product = {
		name: wine.name,
		price_id: wine.price_id,
		price: wine.price * 100,
		image: wine.imageUrl,
		currency: 'RON',
		description: 'boata',
	};
	console.log(product.image);
	return (
		<div
			onClick={() => {
				addItem(product, { count: 1 });
			}}
			className='p-1 bg-primary text-primary-foreground rounded cursor-pointer'
		>
			<ShoppingBasket />
		</div>
	);
};

const ShoppingCartComponent = () => {
	const { handleCartClick, cartCount } = useShoppingCart();
	return (
		<div onClick={() => handleCartClick()} className='relative cursor-pointer'>
			<ShoppingCart />
			<div className='absolute w-5 h-5 text-xs -top-2 select-none rounded-full -right-2 bg-primary text-primary-foreground text-center'>
				<p className='flex items-center justify-center mt-0.5'>{Number(cartCount) < 10 ? cartCount : '9+'}</p>
			</div>
		</div>
	);
};

const ShoppingCartSheet = () => {
	const { handleCartClick, shouldDisplayCart, cartDetails, clearCart } = useShoppingCart();
	return (
		<Sheet className open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
			<SheetContent>
				<SheetHeader className='text-3xl'>Cosul de Cumparaturi</SheetHeader>
				<div className='grid grid-cols-1 gap-2'>
					{Object.values(cartDetails ?? {}).map((product) => {
						console.log(product);
						return (
							<div className='w-full bg-muted rounded p-4'>
								<div className='flex gap-4 h-full'>
									<div className='w-24 h-24'>
										<AspectRatio ratio={1 / 1}>
											<Image
												fill
												src={product.image ?? ''}
												alt={`Imagine pentru produsul ${product.name}`}
												loading='eager'
												className='object-cover rounded'
											/>
										</AspectRatio>
									</div>

									<div className='flex flex-col h-full'>
										<p className='text-xl leading-3 font-bold'>{product.name}</p>
										<span className='text-sm'>{product.formattedValue}</span>
										<p className='mt-auto'>Cantitate: {product.quantity}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<Button onClick={() => clearCart()}>Clear Cart</Button>
			</SheetContent>
		</Sheet>
	);
};

const CartProviderClient = ({ children }: { children: ReactNode }) => {
	const stripe_pk = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;
	return (
		<CartProvider
			mode='payment'
			cartMode='client-only'
			stripe={stripe_pk}
			successUrl='http://localhost:3000'
			cancelUrl='http://localhost:3000'
			currency='RON'
			shouldPersist={true}
			allowedCountries={['RO']}
			billingAddressCollection={true}
		>
			<>{children}</>
		</CartProvider>
	);
};
export { AddToCartButton, ShoppingCartComponent, CartProviderClient, ShoppingCartSheet };
