import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken: unknown;
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}
