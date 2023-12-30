import Image from 'next/image';
import { prisma } from '@/prisma/client';
import { CompleteWine } from '@/prisma/zod';

const WineProductPage = async ({ params }: { params: { slug: string } }) => {
	const currentYear = new Date().getFullYear();

	const getML = (r: string) => {
		let strWithDot = r.replace(',', '.');
		return parseFloat(strWithDot) * 1000.0;
	};

	const wine = (await prisma.wine.findFirst({
		where: {
			slug: params.slug,
		},
		include: {
			house: true,
			collection: true,
		},
	})) as CompleteWine;
	if (!wine) return <div>Not found</div>;

	let yearsTag;
	if (currentYear - wine?.year > 1) {
		yearsTag = ' ani';
	} else if (currentYear - wine?.year === 1) {
		yearsTag = ' an';
	} else {
		yearsTag = null;
	}

	const caracteristics = [
		{
			title: 'Vechime',
			carac: currentYear - wine?.year > 0 ? currentYear - wine?.year + `${yearsTag}` : '',
		},
		{
			title: 'Crama',
			carac: wine?.house.name,
		},
		{
			title: 'Colectie',
			carac: wine?.collection.name,
		},
		{
			title: 'Cantitate',
			carac: parseFloat(wine?.litres) > 1 ? wine?.litres + ' l' : getML(wine?.litres) + ' ml',
		},
	];

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto mt-8'>
			<Image
				src={wine?.image}
				alt={`Photo of ${wine?.name}`}
				width={700}
				height={700}
				className='mx-auto w-[700px] h-full object-cover'
			/>
			<div className='md:pb-10'>
				<h2 className='font-bold my-8 text-2xl sm:text-3xl md:text-4xl'>{wine?.name}</h2>
				<div className='grid grid-cols-2 gap-4 text-left mx-none'>
					{caracteristics.map((c, index) => (
						<div key={index} className='leading-5 mx-auto w-full'>
							<p className='font-bold text-lg sm:text-2xl max-w-[200px]'>{c.title}</p>
							<p className='text-zinc-600 font-semibold sm:text-[1.1rem] max-w-[200px]'>{c.carac}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WineProductPage;
