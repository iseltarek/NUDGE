'use client';
import { Label, Input, Button } from '@nudge/ui';
import { motion } from 'framer-motion';
import { ErrorMessage } from '../../components/form.-error-message';
import { useSignin } from '../hooks/useSignIn';

export function SignInForm() {
  const { form, isLoading } = useSignin();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className='flex sm:w-[400px] w-full flex-col gap-4 shadow-none'
    >
      <div className='flex w-full flex-col items-start gap-[10px]'>
        <form.Field name='email'>
          {(field) => (
            <div className='group flex w-full flex-col gap-[10px]'>
              <motion.div
                layout
                className='flex w-full flex-col gap-[4px]'
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <Input
                  id='email'
                  className='h-[50px] rounded-md border border-[#e4e6eb] bg-white p-4 shadow-none'
                  value={field.state.value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    field.handleChange(e.target.value)
                  }
                  onBlur={field.handleBlur}
                  placeholder={'Enter Your Email Address'}
                  aria-invalid={!field.state.meta.isValid && field.state.meta.isTouched}
                />
                {field.state.meta.errors[0]?.message && (
                  <ErrorMessage
                    message={field.state.meta.errors[0]?.message}
                    isTouched={field.state.meta.isTouched}
                  />
                )}
              </motion.div>
            </div>
          )}
        </form.Field>
      </div>
      <Button
        type='submit'
        disabled={isLoading}
        className='h-[50px] rounded-md bg-[#4A90D9] p-4 shadow-none text-white'
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </Button>
    </form>
  );
}
