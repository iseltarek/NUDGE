`use client`;

import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { useSigninMutation } from './useSignInMutation';
import { useAuthError } from '../../hooks/useAuthStore';

export const signinSchema = z.object({
  email: z.string().email('Enter a valid email address'),
});

export function useSignin() {
  const signinMutation = useSigninMutation();
  const authError = useAuthError();

  const form = useForm({
    defaultValues: {
      email: '',
    },
    validators: {
      onSubmit: signinSchema,
    },
    onSubmit: async ({ value }) => {
      await signinMutation.mutateAsync(value);
    },
  });

  return {
    form,
    isLoading: signinMutation.isPending,
    error: signinMutation.error || (authError ? new Error(authError) : null),
  } as const;
}

export type UseSigninReturn = ReturnType<typeof useSignin>;
