import '@nudge/ui/global.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen flex items-center justify-center dark:bg-[#0e0e10]'>
      {children}
    </div>
  );
}
