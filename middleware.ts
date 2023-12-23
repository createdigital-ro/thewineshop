import { authMiddleware, useUser } from '@clerk/nextjs';

export default authMiddleware({
	publicRoutes: ['/', '/vinuri', '/vinuri/:path*', '/_vercel/:path*', '/api/uploadthing', '/studio'],
});

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
