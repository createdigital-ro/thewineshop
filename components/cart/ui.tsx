'use client';

import { Wine } from '@/types/sanity.data';
import { MinusIcon, PlusIcon, ShoppingBasket, ShoppingCart, Trash2 } from 'lucide-react';
import { ReactNode } from 'react';
import Image from 'next/image';

import { CartProvider, useShoppingCart } from 'use-shopping-cart';
import { Sheet, SheetContent, SheetDescription, SheetHeader } from '../ui/sheet';
import { type Product } from 'use-shopping-cart/core';
import { Button } from '../ui/button';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { ScrollArea } from '../ui/scroll-area';

const AddToCartButton = ({ wine }: { wine: Wine }) => {
	const { addItem } = useShoppingCart();
	console.log(wine.imageUrl);
	const product: Product = {
		name: wine.name,
		id: wine._id,
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
	const {
		handleCartClick,
		shouldDisplayCart,
		cartDetails,
		clearCart,
		incrementItem,
		decrementItem,
		removeItem,
		formattedTotalPrice,
	} = useShoppingCart();
	return (
		<Sheet className open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
			<SheetContent>
				<SheetHeader className='text-3xl mb-4 text-bold'>Cosul de Cumparaturi</SheetHeader>
				<div className='flex flex-col h-3/4 overflow-y-auto'>
					{Object.values(cartDetails ?? {}).map((product) => {
						return (
							<div className='w-full bg-muted rounded p-4 my-2 first:mt-0'>
								<div className='flex gap-3 h-full'>
									<div className='w-[130px]'>
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

									<div className='flex flex-col h-full w-full'>
										<div className='flex'>
											<div>
												<p className='text-xl leading-3 font-bold'>{product.name}</p>
												<span className='text-sm text-muted-foreground'>
													{product.formattedValue}
												</span>
											</div>
										</div>

										<div className='mt-auto flex items-center w-full gap-0.5 text-muted-foreground'>
											<MinusIcon
												className='w-4 cursor-pointer'
												onClick={() => decrementItem(product.id)}
											/>
											<span className='mx-1 select-none'>{product.quantity}</span>
											<PlusIcon
												className='w-4 cursor-pointer'
												onClick={() => incrementItem(product.id)}
											/>
											<Trash2
												onClick={() => removeItem(product.id)}
												className='ml-auto w-4 h-4 text-destructive cursor-pointer'
											/>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className='flex flex-col mt-4 px-2'>
					<div className='flex justify-between text-xl font-bold'>
						<p>Subtotal:</p>
						<span>{formattedTotalPrice}</span>
					</div>
					<span className='text-muted-foreground'>Livrarea si taxele sunt calculate la plata</span>
					<Button className='my-6 mb-2 text-md' onClick={() => clearCart()}>
						Finalizeaza Plata
					</Button>
					<Button onClick={() => handleCartClick()} className='flex gap-1 items-center' variant={'outline'}>
						SAU <span className='text-primary font-bold'>Continua Cumparaturile</span>
					</Button>
				</div>
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
