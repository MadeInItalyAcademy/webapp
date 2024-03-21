import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.OAUTH_CLIENT_KEY as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string
    })
  ],
  pages: {
    signIn: '/sign-in'
  }
});
