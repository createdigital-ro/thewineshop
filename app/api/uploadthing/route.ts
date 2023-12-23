import { createNextRouteHandler } from 'uploadthing/next';

import { CoreFileRouter } from './core';

export const { GET, POST } = createNextRouteHandler({
	router: CoreFileRouter,
});
