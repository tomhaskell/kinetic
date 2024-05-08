import NextAuth from 'next-auth';
import StravaProvider from 'next-auth/providers/strava';

const handler = NextAuth({
  providers: [
    StravaProvider({
      clientId: process.env.STRAVA_CLIENT_ID,
      clientSecret: process.env.STRAVA_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read,read_all,profile:read_all,activity:read_all',
        },
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, user }) {
      if (account) {
        // persist the user id & access token on login into the jwt
        token.id = user?.id;
        token.accessToken = account.access_token;
      }
      return token;
    },
    session({ session, token }) {
      // persist the user id & access token from the jwt (above) into the session
      session.user.id = token.id;
      session.accessToken = token.accessToken;

      return session;
    },
  },
});

export { handler as GET, handler as POST };
