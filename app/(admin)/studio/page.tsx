import FormAddWine from '@/components/studio/forms/addWine';
import { prisma } from '@/prisma/client';

const PanelPage = async () => {
	const houses = await prisma.house.findMany();
	const collections = await prisma.collection.findMany();
	return (
		<div className='max-w-md my-12 mx-auto'>
			<FormAddWine houses={houses} collections={collections} />
		</div>
	);
};

export default PanelPage;
