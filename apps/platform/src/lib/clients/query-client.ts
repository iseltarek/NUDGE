import { QueryClient } from '@tanstack/react-query';
export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,

        retry: (failureCount, error) => {
          const errorWithStatus = error as
            | { status?: number; statusCode?: number }
            | null
            | undefined;
          const status = errorWithStatus?.status ?? errorWithStatus?.statusCode;
          if (status !== undefined && status >= 400 && status < 500) {
            return false;
          }

          if (failureCount >= 2) {
            return false;
          }

          return true;
        },
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),

        refetchOnWindowFocus: false,

        refetchOnReconnect: 'always',

        refetchInterval: false,
      },
    },
  });
}
