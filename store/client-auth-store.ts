"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ClientUser {
  id: number;
  name?: string;
  email: string;
  role?: string;
  balance?: number;
  [key: string]: unknown;
}

interface ClientAuthState {
  user: ClientUser | null;
  accessToken: string | null;
  hydrated: boolean;

  setAuth: (accessToken: string, user: ClientUser) => void;
  logout: () => void;
  setHydrated: (value: boolean) => void;
}

export const useClientAuthStore = create<ClientAuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      hydrated: false,

      setAuth: (accessToken, user) => {
        set({
          accessToken,
          user,
        });
      },

      logout: () => {
        set({
          user: null,
          accessToken: null,
        });
      },

      setHydrated: (value) => {
        set({
          hydrated: value,
        });
      },
    }),
    {
      name: "client-auth",

      onRehydrateStorage: () => {
        return (state, error) => {
          if (error) {
            console.error("❌ Lỗi hydrate client auth:", error);
          }

          state?.setHydrated(true);
        };
      },
    },
  ),
);
