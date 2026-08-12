import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  id: number;
  name?: string;
  email: string;
  [key: string]: unknown;
}

interface AuthState {
  accessToken: string | null;
  user: User | null;
  isAuthenticated: boolean;

  _hasHydrated: boolean;

  login: (accessToken: string, user: User) => void;
  logout: () => void;
  setHasHydrated: (value: boolean) => void;
}

export const useAuthStoreClient = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      isAuthenticated: false,

      _hasHydrated: false,

      login: (accessToken, user) => {
        set({
          accessToken,
          user,
          isAuthenticated: true,
        });
      },

      logout: () => {
        set({
          accessToken: null,
          user: null,
          isAuthenticated: false,
        });
      },

      setHasHydrated: (value) => {
        set({
          _hasHydrated: value,
        });
      },
    }),
    {
      name: "auth_user",

      storage: createJSONStorage(() => localStorage),

      onRehydrateStorage: () => {
        return (state, error) => {
          if (!error) {
            state?.setHasHydrated(true);
          }
        };
      },
    },
  ),
);
