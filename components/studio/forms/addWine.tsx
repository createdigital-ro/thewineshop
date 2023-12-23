'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { WineModel } from '@/prisma/zod';
import { Switch } from '@/components/ui/switch';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Collection, House } from '@prisma/client';

import { toast } from 'sonner';
import { UploadButton } from '../upload/ui';

export function FormAddWine({ houses, collections }: { houses: House[]; collections: Collection[] }) {
	const form = useForm<z.infer<typeof WineModel>>({
		resolver: zodResolver(WineModel),
		defaultValues: {
			name: '',
			price_id: '',
			image: '',
			slug: '',
			recommended: false,
			houseId: 1,
			collectionId: 1,
		},
	});

	async function submitHandle(data: z.infer<typeof WineModel>) {
		console.log(data);
		toast.loading('Loading...');
		const res = await fetch('/api/wine/upload', { method: 'POST', body: JSON.stringify(data) });
		const resText = await res.json();
		toast.success(`${resText}`);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(submitHandle)} className='space-y-6'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder='Name' {...field} />
							</FormControl>
							<FormDescription>The name for the wine</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='price'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Price</FormLabel>
							<FormControl>
								<Input type='number' placeholder='Price' {...field} />
							</FormControl>
							<FormDescription>The price the wine will be listed for</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='price_id'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Stripe Id</FormLabel>
							<FormControl>
								<Input placeholder='Stripe Id' {...field} />
							</FormControl>
							<FormDescription>The stripe_id for the item</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='image'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image</FormLabel>
							<Image
								src={field.value}
								className='w-24 h-24 text-center mx-auto'
								width={200}
								height={200}
								alt='Uploaded Image'
							/>
							<UploadButton
								endpoint='imageUploader'
								onClientUploadComplete={(res) => {
									form.setValue('image', res[0].serverData.fileUrl);
								}}
								onUploadError={(error: Error) => {
									// Do something with the error.
									alert(`ERROR! ${error.message}`);
								}}
							/>

							<FormDescription>Input an image for the wine</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='year'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Year Produced</FormLabel>
							<FormControl>
								<Input type='number' placeholder='2023' {...field} />
							</FormControl>
							<FormDescription>The year the wine was produced in</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='slug'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Slug</FormLabel>
							<FormControl>
								<Input placeholder='nameofwine' {...field} />
							</FormControl>
							<FormMessage />
							<FormDescription>Select a slug for the item link</FormDescription>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='houseId'
					render={({ field }) => (
						<FormItem>
							<FormLabel>House</FormLabel>
							<Select value={field.value.toString()} onValueChange={field.onChange}>
								<FormControl>
									<SelectTrigger className='w-[280px]'>
										<SelectValue placeholder='Select a house' />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Houses</SelectLabel>
										<SelectSeparator />
										{houses.map((house) => (
											<SelectItem key={house.id} value={house.id.toString()}>
												{house.name}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
							<FormDescription>Select a house for the item</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='collectionId'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Collection</FormLabel>
							<Select value={field.value.toString()} onValueChange={field.onChange}>
								<FormControl>
									<SelectTrigger className='w-[280px]'>
										<SelectValue placeholder='Select a collection' />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Collections</SelectLabel>
										<SelectSeparator />
										{collections.map((collection) => (
											<SelectItem key={collection.id} value={collection.id.toString()}>
												{collection.name}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
							<FormDescription>Select a house for the item</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='recommended'
					render={({ field }) => (
						<FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
							<div className='space-y-0.5'>
								<FormLabel className='text-base'>Recommended</FormLabel>
								<FormDescription>Should this item be listed as recommended?</FormDescription>
							</div>
							<FormControl>
								<Switch checked={field.value} onCheckedChange={field.onChange} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Add wine</Button>
			</form>
		</Form>
	);
}

export default FormAddWine;
