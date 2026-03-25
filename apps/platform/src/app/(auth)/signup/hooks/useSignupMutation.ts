'use client';
import { authClient } from '@/src/lib/clients/auth-client';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useSignupMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: { email: string; name: string; password: string }) => {
      await authClient.signUp.email(
        {
          email: data.email,
          name: data.name,
          password: data.password,
          callbackURL: '/home',
        },
        {
          onSuccess: () => {
            router.push('/home');
          },
          onError: (ctx) => {
            toast.error('Signup failed', {
              description: ctx.error.message,
            });
          },
        }
      );
    },
  });
}
