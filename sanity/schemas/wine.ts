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
			name: 'image',
			type: 'image',
			title: 'Image',
		},
		{
			name: 'house',
			type: 'object',
			fields: [
				{
					name: 'house',
					type: 'reference',
					to: [{ type: 'house' }],
				},
			],
		},
		{
			name: 'collection',
			type: 'object',
			fields: [
				{
					name: 'collection',
					type: 'reference',
					to: [{ type: 'collection' }],
				},
			],
		},
	],
};
