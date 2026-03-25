import { GoogleIcon } from '@/src/utils/logos';
import { AuthCard } from '../components/auth-card';
import { SignupForm } from './components/singup-form';

export default function SignUp() {
  return (
    <AuthCard
      title='Nudge
   '
      description={`your work, your context.`}
    >
      <div className='flex flex-col items-center gap-4 w-full'>
        <button className='w-full text-[1.2rem] flex flex-row items-center gap-10 justify-center rounded-md bg-[#27272a4d] px-4 py-2 font-medium text-white  '>
          <GoogleIcon></GoogleIcon>
          Continue with Google
        </button>
        <div className='w-full border-t border-[#cbd5e1] my-4 h-[1px]' />
        <SignupForm />
        <span className='text-sm text-white'>
          Already Have an account?{' '}
          <a href='/signin' className='text-blue hover:underline'>
            Sign In
          </a>
        </span>
      </div>
    </AuthCard>
  );
}
