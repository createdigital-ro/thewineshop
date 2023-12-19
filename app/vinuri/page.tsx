import { client } from '@/sanity/lib/client';
import { Wine } from '@/types/sanity.data';

const ShoppingPage = async () => {
	const query = `*[_type == "wine"]{
        _id,
        name,
        "imageUrl": image.asset->url,
        "houseName": houseRef->name,
        "collectionName": collectionRef->name,
        year,
        price,
    }`;
	const wines: Wine[] = await client.fetch(query);
	return (
		<div>
			{wines.map((wine) => {
				return <div key={wine._id}></div>;
			})}
		</div>
	);
};

export default ShoppingPage;
