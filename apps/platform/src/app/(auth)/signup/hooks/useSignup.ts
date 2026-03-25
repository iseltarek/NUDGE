import { useForm } from '@tanstack/react-form';
import z from 'zod';
import { useAuthError } from '../../hooks/useAuthStore';
import { useSignupMutation } from './useSignupMutation';

export const signupSchema = z
  .object({
    email: z.string().email('Enter a valid email address'),
    name: z.string().min(2, 'Name must be at least 2 characters long'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters long'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
  });

export function useSignup() {
  const signupMutation = useSignupMutation();
  const setAuthError = useAuthError();

  const form = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
    validators: {
      onSubmit: signupSchema,
    },
    onSubmit: async ({ value }) => {
      await signupMutation.mutateAsync(value);
    },
  });
  return {
    form,
    isLoading: signupMutation.isPending,
    error: signupMutation.error || (setAuthError ? new Error(setAuthError) : null),
  };
}

export type UseSignupReturn = ReturnType<typeof useSignup>;
