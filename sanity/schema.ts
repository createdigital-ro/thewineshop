import { type SchemaTypeDefinition } from 'sanity';
import wine from './schemas/wine';
import house from './schemas/house';
import collection from './schemas/collection';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [wine, house, collection],
};
