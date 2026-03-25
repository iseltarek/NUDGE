import 'dotenv/config';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '../common/db/index';
import { magicLink } from 'better-auth/plugins/magic-link';
import { sendMagicLinkEmail } from 'src/common/services/email.service';
import * as schema from '../common/schema';

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: 'pg', usePlural: false, schema }),
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  session: {
    expiresIn: 60 * 60 * 24 * 7,
  },
  user: {},
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url }) => {
        await sendMagicLinkEmail(email, url);
      },
    }),
  ],
  advanced: {
    useSecureCookies: process.env.NODE_ENV === 'production',
  },
  trustedOrigins: ['*'],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});
