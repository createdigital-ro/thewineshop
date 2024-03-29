'use client';

import { CartProvider, useShoppingCart } from 'use-shopping-cart';

import { type ReactNode } from 'react';
import { type Product } from 'use-shopping-cart/core';
import { type CompleteWine } from '@/prisma/zod';

import { MinusIcon, PlusIcon, ShoppingBasket, ShoppingCart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetHeader } from '../ui/sheet';
import { Button } from '../ui/button';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { toast } from 'sonner';

import { useRouter } from 'next/navigation';

const AddToCartButton = ({ wine }: { wine: CompleteWine }) => {
	const { addItem } = useShoppingCart();
	const product: Product = {
		name: wine.name,
		id: wine.id.toString(),
		price: wine.price * 100,
		image: wine.image,
		currency: 'RON',
		description: 'boata',
	};
	return (
		<Button
			size={'icon'}
			onClick={() => {
				addItem(product, { count: 1 });
				toast.success(`${product.name} a fost adaugat cu succes`);
			}}
		>
			<ShoppingBasket />
		</Button>
	);
};

const ShoppingCartComponent = () => {
	const { handleCartClick, cartCount } = useShoppingCart();
	return (
		<div onClick={() => handleCartClick()} className='relative cursor-pointer'>
			<ShoppingCart />
			{cartCount !== 0 && (
				<div className='absolute w-5 h-5 text-xs -top-2 select-none rounded-full -right-2 bg-primary text-primary-foreground text-center'>
					<p className='flex items-center justify-center mt-0.5'>
						{Number(cartCount) < 10 ? cartCount : '9+'}
					</p>
				</div>
			)}
		</div>
	);
};

const ShoppingCartSheet = () => {
	const {
		handleCartClick,
		shouldDisplayCart,
		cartDetails,
		cartCount,
		incrementItem,
		decrementItem,
		removeItem,
		formattedTotalPrice,
	} = useShoppingCart();

	const router = useRouter();

	return (
		<Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
			<SheetContent>
				<SheetHeader className='text-3xl mb-4 text-bold'>Cosul de Cumparaturi</SheetHeader>
				{cartCount === 0 ? (
					<div className='text-black text-xl text-center'>Nu exista produse in cos</div>
				) : (
					<div className='flex flex-col max-h-[70%] overflow-y-auto'>
						{Object.values(cartDetails ?? {}).map((product) => {
							return (
								<div key={product.id} className='w-full bg-muted rounded p-4 my-2 first:mt-0 last:mb-0'>
									<div className='flex gap-3 h-full'>
										<div className='w-[130px] bg-neutral-200/80 rounded p-2'>
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

										<div className='flex flex-col w-full'>
											<div className='flex'>
												<div>
													<p className='text-xl leading-5 font-bold'>{product.name}</p>
													<span className='text-sm text-muted-foreground'>
														{product.formattedValue}
													</span>
												</div>
											</div>

											<div className='mt-auto flex items-end justify-end w-full gap-0.5 text-muted-foreground'>
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
				)}

				<div className='flex flex-col mt-auto px-2'>
					<div className='flex justify-between text-xl font-bold'>
						<p>Subtotal:</p>
						<span>{formattedTotalPrice}</span>
					</div>
					<span className='text-muted-foreground'>Livrarea si taxele sunt calculate la plata</span>
					<Button
						className='my-6 mb-2 text-md'
						onClick={async () => {
							const response = await fetch('/api/stripe/checkout', {
								method: 'POST',
								body: JSON.stringify(cartDetails),
							});
							const stripeSessionUrl = await response.json();
							window.location.assign(stripeSessionUrl);
						}}
					>
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
		<CartProvider cartMode='checkout-session' stripe={stripe_pk} currency='RON' shouldPersist={true}>
			{children}
		</CartProvider>
	);
};
export { AddToCartButton, ShoppingCartComponent, CartProviderClient, ShoppingCartSheet };
