import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({publicRoutes: ["/","/workouts","/workouts/(.*)","/templates","/templates/(.*)","/yanis0","/yanis1","/cyr0","/cyr0/(.*)"]});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
      // matcher: [""],
};
 