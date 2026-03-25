'use client';
import { Input, Button } from '@nudge/ui';
import { motion } from 'framer-motion';
import { ErrorMessage } from '../../components/form.-error-message';
import { useSignup } from '../hooks/useSignup';
import { useState } from 'react';
import { EyeOff, EyeOpen } from '@/src/utils/logos';

export function SignupForm() {
  const { form, isLoading, error } = useSignup();
  const [showPassword, setShowPassword] = useState<{
    password: boolean;
    confirmPassword: boolean;
  }>({ password: false, confirmPassword: false });
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
      <div className='flex w-full flex-col items-start gap-[10px]'>
        <form.Field name='name'>
          {(field) => (
            <div className='group flex w-full flex-col gap-[10px]'>
              <motion.div
                layout
                className='flex w-full flex-col gap-[4px]'
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <Input
                  id='name'
                  className='h-[50px] rounded-md border border-[#e4e6eb] bg-white p-4 shadow-none'
                  value={field.state.value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    field.handleChange(e.target.value)
                  }
                  onBlur={field.handleBlur}
                  placeholder={'Enter Your Name'}
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
      <div className='flex w-full flex-col'>
        <form.Field name='password'>
          {(field) => (
            <div className='group flex w-full flex-col gap-[10px]'>
              <motion.div
                layout
                className='flex flex-col gap-[4px]'
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className='relative'>
                  <Input
                    id='password'
                    type={showPassword.password ? 'text' : 'password'}
                    className='h-[50px] rounded-[10px] border border-[#e4e6eb] bg-white p-4 pe-9 shadow-none'
                    value={field.state.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      field.handleChange(e.target.value)
                    }
                    onBlur={field.handleBlur}
                    placeholder={'Enter Your Password'}
                  />
                  <button
                    type='button'
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        password: !prev.password,
                      }))
                    }
                    className='absolute inset-y-0 end-1 flex h-full w-9 items-center justify-center text-muted-foreground/80 hover:text-foreground'
                  >
                    {showPassword.password ? <EyeOff /> : <EyeOpen />}
                  </button>
                </div>
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

      <div className='flex w-full flex-col'>
        <form.Field name='confirmPassword'>
          {(field) => {
            return (
              <div className='group flex w-full flex-col gap-[10px]'>
                <motion.div
                  layout
                  className='flex flex-col gap-[4px]'
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <div className='relative'>
                    <Input
                      id='confirmPassword'
                      type={showPassword.confirmPassword ? 'text' : 'password'}
                      className='h-[50px] rounded-[10px] border border-[#e4e6eb] bg-white p-4 pe-9 shadow-none'
                      value={field.state.value}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        field.handleChange(e.target.value)
                      }
                      onBlur={field.handleBlur}
                      placeholder={'Confirm Your Password'}
                    />
                    <button
                      type='button'
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          confirmPassword: !prev.confirmPassword,
                        }))
                      }
                      className='absolute inset-y-0 end-1 flex h-full w-9 items-center justify-center text-muted-foreground/80 hover:text-foreground'
                    >
                      {showPassword.confirmPassword ? <EyeOff /> : <EyeOpen />}
                    </button>
                  </div>
                  {field.state.meta.errors[0]?.message && (
                    <ErrorMessage
                      message={field.state.meta.errors[0]?.message}
                      isTouched={field.state.meta.isTouched}
                    />
                  )}
                </motion.div>
              </div>
            );
          }}
        </form.Field>
      </div>
      {error && <ErrorMessage message={error.message} isTouched={true} />}
      <Button type='submit' className='h-[50px] rounded-md bg-[#4A90D9] p-4 shadow-none text-white'>
        Sign Up
      </Button>
    </form>
  );
}
