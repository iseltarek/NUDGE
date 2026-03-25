import { cn } from '@nudge/ui/lib/utils';
import Image from 'next/image';
interface AuthCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function AuthCard({ title, description, children, className }: AuthCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center align-center justify-center p-5 sm:p-[1.5rem]',
        className
      )}
    >
      <div className='flex flex-col items-center gap-[0.5rem]'>
        <p className='font-mono font-bold text-[3rem] text-white/90'>{title}</p>{' '}
        <p className='w-full max-w-[409px] whitespace-pre-wrap font-plus-jakarta text-[#71717a] text-[1rem] leading-[1.4]'>
          {description}
        </p>
      </div>
      <div className={cn('flex flex-col mt-6 w-full items-start gap-6 rounded-[14px]', className)}>
        {children}
      </div>
    </div>
  );
}
