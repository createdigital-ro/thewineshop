import Divider from '@/components/Divider';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { prisma } from '@/prisma/client';
import ProductItem from '@/components/products';

export default async function Home() {
	const recommendedWines = await prisma.wine.findMany({
		where: {
			recommended: true,
		},
		include: {
			house: true,
			collection: true,
		},
	});
	return (
		<>
			<div className='mt-8'>
				<video autoPlay loop muted className='rounded '>
					<source src='/home/video-home.mp4' />
				</video>
			</div>
			<Divider />
			<section className='mt-20'>
				<div className='relative mt-8 w-full'>
					<blockquote className='font-bold text-2xl md:text-4xl text-justify'>
						Este bine să ne amintim că există cinci motive pentru a bea vin: sosirea unui prieten, setea
						actuală sau viitoare, excelența vinului, sau din orice alt motiv.
					</blockquote>
					<Image
						src={'/home/quotesStart.svg'}
						alt='quotes'
						width={100}
						height={100}
						className='absolute w-8 -top-8 left-0'
					/>
					<Image
						src={'/home/quotesEnd.svg'}
						alt='quotes'
						width={100}
						height={100}
						className='absolute w-8 -bottom-8 right-0'
					/>
				</div>
			</section>
			<div className='my-8 flex flex-col '>
				<div className={`my-4 flex flex-col lg:flex-row justify-between w-full items-center`}>
					<div className='w-full max-w-xl'>
						<AspectRatio ratio={1 / 1}>
							<Image
								src={'/home/photo1-home.png'}
								alt={'Imagine pahar de vin'}
								className='object-cover p-8'
								loading='eager'
								fill
								priority={true}
							/>
						</AspectRatio>
					</div>
					<div className='max-w-md text-center'>
						<h2 className='font-semibold text-3xl leading-7'>Bine ați venit la TheWineShop</h2>
						<p className='text-md text-muted-foreground mt-4'>
							Produsele noastre rafinate sunt un adevărat privilegiu pentru pasionații de vin, fiind o
							poartă către lumea vinurilor cu adevărat excelente. Fie că sunteți somelier experimentat sau
							începător entuziast, vă invităm să descoperiți emoția pură a gustului în fiecare sticlă
							Thewineshop! Din regiuni pitorești ale Italiei, cramele precum &quot;Marchesi de&apos;
							Cordano&quot;, &quot;Casa Di Terra&quot; și &quot;Podere Don Cataldo&quot; aduc la viață
							xltradiția și pasiunea în fiecare strop de licor vinicol.
						</p>
					</div>
				</div>
				<h3 className='text-3xl text-center font-semibold underline mb-8'>Recomandarile noastre</h3>
				<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
					{recommendedWines.map((wine) => {
						return <ProductItem key={wine.id} wine={wine} />;
					})}
				</section>
				<Divider />
				<div className={`my-4 flex flex-col lg:flex-row-reverse justify-between w-full items-center`}>
					<div className='w-full max-w-xl'>
						<AspectRatio ratio={1 / 1}>
							<Image
								src={'/home/photo2-home.png'}
								alt={'Imagine butoaie de vin'}
								fill
								className='object-cover p-8'
							/>
						</AspectRatio>
					</div>
					<div className='max-w-md text-center'>
						<h2 className='font-semibold text-3xl leading-7'>Descoperiți povestea fiecărui pahar de vin</h2>
						<p className='text-md text-muted-foreground mt-4'>
							Fiecare etichetă spune o poveste unică, iar înțelegerea acestei povestiri este cheia spre
							adevăratul privilegiu al cunoașterii vinurilor. Pentru cei ce încep această călătorie,
							Thewineshop devine ghidul lor în lumea vinurilor de excepție, deschizând uși către
							rafinament și descoperire. În sticlele noastre, veți găsi nu doar vin, ci povestea și
							pasiunea ce transformă fiecare degustare într-o experiență memorabilă.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
