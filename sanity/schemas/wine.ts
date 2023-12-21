export default {
	name: 'wine',
	type: 'document',
	title: 'Wines',
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Name',
		},
		{
			name: 'price',
			type: 'number',
			title: 'Price',
		},
		{
			name: 'price_id',
			type: 'string',
			title: 'Stripe Price Id',
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
		},
		{
			name: 'year',
			type: 'string',
			title: 'Year Produced',
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
		},
		{
			name: 'recommended',
			type: 'boolean',
			title: 'Recommended',
		},
		{
			name: 'houseRef',
			title: 'Wine House',
			type: 'reference',
			to: [{ type: 'house' }],
		},
		{
			name: 'collectionRef',
			title: 'Wine Collection',
			type: 'reference',
			to: [{ type: 'collection' }],
		},
	],
};
