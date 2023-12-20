import Divider from '@/components/Divider';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

export default function Home() {
	const hosues = [
		{
			imageUrl: '/home/photo1-home.png',
			imageAlt: 'Imagine pahar de vin',
			name: `Bine ați venit la TheWineShop`,
			reversed: false,
			description: `Produsele noastre rafinate sunt un adevărat privilegiu pentru pasionații de vin, fiind o poartă
				către lumea vinurilor cu adevărat excelente. Fie că sunteți somelier experimentat sau începător
				entuziast, vă invităm să descoperiți emoția pură a gustului în fiecare sticlă Thewineshop! Din
				regiuni pitorești ale Italiei, cramele precum "Marchesi de' Cordano", "Casa Di
				Terra" și "Podere Don Cataldo" aduc la viață tradiția și pasiunea în fiecare strop de
				licor vinicol.`,
		},
		{
			imageUrl: '/home/photo2-home.png',
			imageAlt: 'Imagine butoaie de vin',
			name: 'Descoperiți povestea fiecărui pahar de vin',
			reversed: true,
			description:
				'Fiecare etichetă spune o poveste unică, iar înțelegerea acestei povestiri este cheia spre adevăratul privilegiu al cunoașterii vinurilor. Pentru cei ce încep această călătorie, Thewineshop devine ghidul lor în lumea vinurilor de excepție, deschizând uși către rafinament și descoperire. În sticlele noastre, veți găsi nu doar vin, ci povestea și pasiunea ce transformă fiecare degustare într-o experiență memorabilă.',
		},
	];
	return (
		<>
			<video autoPlay loop muted className='rounded '>
				<source src='/home/video-home.mp4' />
			</video>
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
				{hosues.map((h) => (
					<div
						key={h.name}
						className={`my-4 flex flex-col ${
							h.reversed ? 'lg:flex-row' : 'lg:flex-row-reverse'
						} justify-between w-full items-center`}
					>
						<div className='w-full max-w-xl'>
							<AspectRatio ratio={1 / 1}>
								<Image src={h.imageUrl} alt={h.imageAlt} fill className='object-cover p-8' />
							</AspectRatio>
						</div>
						<div className='max-w-md text-center'>
							<h3 className='font-semibold text-3xl leading-7'>{h.name}</h3>
							<p className='text-md text-muted-foreground mt-4'>{h.description}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
