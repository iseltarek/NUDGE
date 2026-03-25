import { Store } from '@tanstack/react-store';

interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
  error: string | null;
}
export interface SignupDataType {
  email: string;
  name: string;
}
const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
  isInitialized: false,
  error: null,
};

export const authStore = new Store(initialState);

export const authActions = {
  setError: (_error: string | null) => {},
  setAccessToken: (_accessToken: string | null) => {},
  signup: async (_signUpdata: SignupDataType): Promise<void> => {},
  login: async (_email: string): Promise<void> => {},
  logout: async (): Promise<void> => {},
  requestPasswordReset: async (_email: string, _redirectTo?: string): Promise<void> => {},
  resetPassword: async (_token: string, _newPassword: string): Promise<void> => {},
};
