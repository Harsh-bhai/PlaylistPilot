import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "@/lib/spotify";

const refreshAccessToken = async (token) => {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refeshedToken } = spotifyApi.getAccessToken();
    console.log("refreshed Token in ", refeshedToken);
    return {
      ...token,
      accessToken: refeshedToken.acccess_token,
      accessTokenExpires: Date.now() + refeshedToken.expires_in * 1000,
      refreshToken: refeshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_clientId,
      clientSecret: process.env.NEXT_PUBLIC_client_secret,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // initial signin
      if (account && user) {
        return {
          ...token,
          accessToken: account.acccess_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at * 1000, // we are handling expiring time in ms hence * 1000
        };
      }

      // return previous token if the accesstoken is not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log("EXISTING ACCESS TOKEN IS VALID");
        return token;
      }
      console.log("EXISTING ACCESS TOKEN IS VALID");
      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;
      return session;
    },
  },
};

export default NextAuth(authOptions);
