export default {
	name: 'house',
	type: 'document',
	title: 'Houses',
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Name of House',
		},
		{
			name: 'description',
			type: 'string',
			title: 'House description',
		},
		{
			name: 'image',
			type: 'image',
			title: 'House image',
		},
	],
};
