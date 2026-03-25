`use client`;

import { authClient } from '@/src/lib/clients/auth-client';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export function useSigninMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: { email: string }) => {
      await authClient.signIn.magicLink(
        {
          email: data.email,
          callbackURL: '/home',
          newUserCallbackURL: '/home',
          errorCallbackURL: '/error',
        },
        {
          onSuccess: () => {
            router.push('/home');
          },
          onError: (ctx) => {
            toast.error('Login failed', {
              description: ctx.error.message,
            });
          },
        }
      );
    },
  });
}

export function useSignInWithGoogleMutation() {
  return useMutation({
    mutationFn: async () => {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: 'http://localhost:3000/home',
        errorCallbackURL: '/error',
        newUserCallbackURL: 'http://localhost:3000/home',
      });
    },
  });
}
