import { type SchemaTypeDefinition } from 'sanity';
import wine from './schemas/wine';
import house from './schemas/house';
import category from './schemas/category';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [wine, house, category],
};
