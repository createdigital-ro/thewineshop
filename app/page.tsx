import Divider from '@/components/Divider';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

export default function Home() {
	const hosues = [
		{
			imageUrl: '/home/homepage1.png',
			imageAlt: "Image of Marchesi de' Cordano",
			name: `Marchesi de' Cordano`,
			location: 'Abruzzo, Italia',
			reversed: false,
			description:
				"Crama Marchesi de' Cordano este conceput ă ca un loc de întâlnire și împărtășire, păstrând credința în filozofia pe care Francesco D'Onofrio vrea să o transmită prin produsele sale. Arhitectura pivniței prezintă o structură inovatoare, realizată în întregime din lemn, caldă și primitoare, care găzduiește degustări și întâlniri și de la care pornește un bogat itinerar de vizită.",
		},
		{
			imageUrl: '/home/homepage2.png',
			imageAlt: 'Image of Casa Di Terra',
			name: 'Casa Di Terra',
			location: 'Toscana, Italia',
			reversed: true,
			description:
				'Casa di Terra a fost înființată în 1950 de către bunicul proprietarului actual, Giuliano și Gessica, frate și soră, în Bolgheri, în inima Toscanei. Aceste terenuri, odată dedicate culturilor tradiționale (cereale, horticultură, ulei de măsline, vin) au lăsat an de an mai mult spațiu podgoriilor până la decizia finală din 2001 de a pune energia moșiei în marcarea vinului.',
		},
	];
	return (
		<main className='max-w-6xl mx-auto px-8'>
			<Divider />
			<section className='my-16'>
				<h1 className='text-2xl md:text-4xl font-semibold mb-4'>Bine ați venit la TheWineShop</h1>
				<p className='text-lg'>
					Produsele noastre rafinate sunt un adevărat privilegiu pentru pasionații de vin, fiind o poartă
					către lumea vinurilor cu adevărat excelente. Fie că sunteți somelier experimentat sau începător
					entuziast, vă invităm să descoperiți emoția pură a gustului în fiecare sticlă Thewineshop! Din
					regiuni pitorești ale Italiei, cramele precum "Marchesi de' Cordano”, "Casa Di Terra" și "Podere Don
					Cataldo” aduc la viață tradiția și pasiunea în fiecare strop de licor vinicol.
				</p>
			</section>
			<section>
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
							<p className='italic text-xl'>{h.location}</p>
							<p className='text-md text-muted-foreground mt-4'>{h.description}</p>
						</div>
					</div>
				))}
			</div>
			<section className='my-16'>
				<h1 className='text-2xl md:text-4xl font-semibold mb-4'>Descoperiți povestea fiecărui pahar de vin</h1>
				<p className='text-lg'>
					Fiecare etichetă spune o poveste unică, iar înțelegerea acestei povestiri este cheia spre adevăratul
					privilegiu al cunoașterii vinurilor. Pentru cei ce încep această călătorie, Thewineshop devine
					ghidul lor în lumea vinurilor de excepție, deschizând uși către rafinament și descoperire. În
					sticlele noastre, veți găsi nu doar vin, ci povestea și pasiunea ce transformă fiecare degustare
					într-o experiență memorabilă.
				</p>
			</section>

			<Divider />
		</main>
	);
}
