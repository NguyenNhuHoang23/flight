"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

export interface SystemConfig {
  fanpage: string;
  hotline: string;
  address: string;
  website: string;
  zalo: string;
  messenger: string;
  phone: string;
  emailContact?: string;
  bankInfo?: string;
}

type GetClientContextType = {
  info?: SystemConfig;
  isLoading: boolean;
  error: string | null;
  refetchInfo: () => Promise<unknown>;
};

const GetClientContext = createContext<GetClientContextType | undefined>(
  undefined,
);

interface GetClientProviderProps {
  children: ReactNode;
}

async function fetchAdminInfo(): Promise<SystemConfig> {
  const response = await fetch("/api/admin/info", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data = await response.json();
  console.log("🚀 ~ fetchAdminInfo ~ data:", data)

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Không thể lấy thông tin website");
  }

  return data.data as SystemConfig;
}

function ClientDataProvider({ children }: GetClientProviderProps) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["admin-info"],
    queryFn: fetchAdminInfo,
    staleTime: 30 * 1000,
  });

  return (
    <GetClientContext.Provider
      value={{
        info: data,
        isLoading,
        error: error instanceof Error ? error.message : null,
        refetchInfo: refetch,
      }}
    >
      {children}
    </GetClientContext.Provider>
  );
}

export function GetClientProvider({ children }: GetClientProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ClientDataProvider>{children}</ClientDataProvider>
    </QueryClientProvider>
  );
}

export function useGetData() {
  const context = useContext(GetClientContext);

  if (context === undefined) {
    throw new Error("useGetData must be used within a GetClientProvider");
  }

  return context;
}
