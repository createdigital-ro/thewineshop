import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/vinuri",
    "/vinuri/:path*",
    "/_vercel/:path*",
    "/studio",
    "/comenzi/:path*",
    "/cookies",
    "/legal",
    "/povestea-noastra",
    "/api/uploadthing",
    "/api/stripe/checkout",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
