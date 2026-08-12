"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CustomerUser {
  id: number;
  userName?: string;
  name?: string;
  email: string;
  email_verified_at?: string | null;
  role: string;
  balance: string | number;
  created_at?: string;
  updated_at?: string;
}

interface CustomerAuthState {
  user: CustomerUser | null;
  accessToken: string | null;
  hydrated: boolean;

  login: (user: CustomerUser, accessToken: string) => void;
  logout: () => void;
  setHydrated: (value: boolean) => void;
}

export const useCustomerAuthStore = create<CustomerAuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      hydrated: false,

      login: (user, accessToken) => {
        set({
          user,
          accessToken,
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
      name: "customer-auth",

      onRehydrateStorage: () => {
        return (state, error) => {
          if (error) {
            console.error("❌ Lỗi hydrate customer auth:", error);
          }

          state?.setHydrated(true);
        };
      },
    },
  ),
);
