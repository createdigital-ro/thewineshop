import { authMiddleware, useUser } from '@clerk/nextjs';

export default authMiddleware({
	publicRoutes: [
		'/',
		'/vinuri',
		'/vinuri/:path*',
		'/_vercel/:path*',
		'/api/uploadthing',
		'/studio',
		'/api/stripe/checkout',
		'/cookies',
		'/legal',
		'/povestea-noastra',
	],
});

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
