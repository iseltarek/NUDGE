import { useStore } from '@tanstack/react-store';
import { authActions, authStore } from '../stores/auth.store';

const _hasInitialized = false;

export function useAuth() {
  return {
    login: authActions.login,
    logout: authActions.logout,
    signup: authActions.signup,
    clearError: () => authActions.setError(null),
  };
}

export function useAuthError() {
  return useStore(authStore, (state) => state.error);
}

export function useAccessToken() {
  return useStore(authStore, (state) => state.accessToken);
}
