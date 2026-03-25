import { createAuthClient } from 'better-auth/react';
import { magicLinkClient } from 'better-auth/client/plugins';

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  credentials: 'include',
  basePath: '/api/auth',
  plugins: [magicLinkClient()],
});
