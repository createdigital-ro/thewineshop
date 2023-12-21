import { Button } from '@/components/ui/button';
import { WineOff } from 'lucide-react';
import Link from 'next/link';

const notFoundPage = () => {
	return (
		<div className='text-center flex flex-col gap-4 my-16 relative'>
			<WineOff className='w-12 h-12 right-0 sm:w-24 sm:h-24 lg:w-48 lg:h-48 lg:top-6 lg:-right-5 mx-auto' />
			<h2 className='font-bold text-5xl sm:text-6xl md:text-7xl '>Oops!</h2>
			<h3 className='text-primary font-semibold text-xl sm:text-2xl md:text-3xl'>
				404 - Pagina nu a fost găsită
			</h3>
			<p className='font-semibold sm:max-w-[620px] sm:mx-auto md:text-lg'>
				Nu am putut găsi pagina pe care o cautați. Poate ați introdus greșit adresa sau aceasta nu mai există.
				Vă rugăm să verificați și să încercați din nou!
			</p>
			<Link href={`/`}>
				<Button className='font-bold text-md md:text-lg'>Înapoi Acasă</Button>
			</Link>
		</div>
	);
};

export default notFoundPage;
