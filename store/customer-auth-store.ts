"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { parseVndAmount } from "@/lib/refund-balance";

export interface CustomerUser {
  id: number;
  username?: string;
  userName?: string;
  name?: string;
  email?: string;
  email_verified_at?: string | null;
  role: string;
  balance: number;
  created_at?: string;
  updated_at?: string;
}

interface CustomerAuthState {
  user: CustomerUser | null;
  accessToken: string | null;
  hydrated: boolean;

  login: (user: CustomerUser, accessToken: string) => void;
  updateUser: (user: Partial<CustomerUser>) => void;
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
        const username = user.username || user.userName || user.name || "";

        set({
          user: {
            ...user,
            username,
            userName: username,
            balance: parseVndAmount(user.balance),
          },
          accessToken,
        });
      },

      updateUser: (user) => {
        set((state) => {
          if (!state.user) return state;

          const username =
            user.username ||
            user.userName ||
            user.name ||
            state.user.username ||
            state.user.userName ||
            "";

          return {
            user: {
              ...state.user,
              ...user,
              username,
              userName: username,
              balance: parseVndAmount(user.balance ?? state.user.balance),
            },
          };
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

          if (state?.user) {
            state.user.balance = parseVndAmount(state.user.balance);
          }

          state?.setHydrated(true);
        };
      },
    },
  ),
);
