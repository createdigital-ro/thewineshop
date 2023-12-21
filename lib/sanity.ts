import { client } from '@/sanity/lib/client';
import { type Wine } from '@/types/sanity.data';

export const getRecommended = async () => {
	const query = `*[_type == "wine" && recommended == true] | order(_id) [0...3] {
        _id,
        name,
        "imageUrl": image.asset->url,
		"blurUrl": image.asset->.metadata.lqip,
        "houseName": houseRef->name,
        "collectionName": collectionRef->name,
        year,
        price,
		"slug": slug.current
    	}`;
	const res: Wine[] = await client.fetch(query).catch((e) => console.log(e));
	return res;
};
