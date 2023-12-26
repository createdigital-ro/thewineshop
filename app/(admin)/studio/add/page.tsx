import FormAddWine from '@/components/studio/forms/addWine';
import { prisma } from '@/prisma/client';

const PanelPage = async () => {
	const houses = await prisma.house.findMany();
	const collections = await prisma.collection.findMany();
	return (
		<>
			<h2 className='text-4xl my-4'>Add single wine</h2>
			<FormAddWine houses={houses} collections={collections} />
		</>
	);
};

export default PanelPage;
