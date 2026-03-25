import { AnimatePresence, motion } from 'framer-motion';

export function ErrorMessage({ message, isTouched }: { message?: string; isTouched?: boolean }) {
  return (
    <div className='min-h-[16px] overflow-hidden'>
      <AnimatePresence initial={false}>
        {message && isTouched && (
          <motion.p
            key={message}
            layout
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              mass: 0.5,
            }}
            className='text-error text-red text-xs leading-tight'
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
