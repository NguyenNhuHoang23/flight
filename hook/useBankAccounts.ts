"use client";

import { useCallback, useEffect, useState } from "react";

// ======================================================
// TYPES
// ======================================================

export interface BankAccount {
  id: number;
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  transferContent: string | null;
  isActive: boolean;
}

interface BankApiItem {
  id: number;
  bank_name: string;
  account_number: string;
  account_name: string;
  transfer_content: string | null;
  status: boolean;
}

interface BankApiResponse {
  success: boolean;
  message: string;
  data: BankApiItem | BankApiItem[];
}

// ======================================================
// MAPPING API -> FRONTEND
// ======================================================

const mapBank = (bank: BankApiItem): BankAccount => ({
  id: bank.id,
  bankName: bank.bank_name,
  accountHolder: bank.account_name,
  accountNumber: bank.account_number,
  transferContent: bank.transfer_content,
  isActive: Boolean(bank.status),
});

// ======================================================
// HOOK
// ======================================================

export function useBankAccounts(token?: string) {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);

  const [loading, setLoading] = useState(false);

  const [adding, setAdding] = useState(false);

  const [updating, setUpdating] = useState(false);

  const [deleting, setDeleting] = useState(false);

  const [error, setError] = useState<string | null>(null);

  // ====================================================
  // GET ALL BANKS
  // ====================================================

  const fetchBanks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/admin/bank", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      });
            if (response.status === 401) {
        localStorage.removeItem("admin-auth");

        window.location.href = "/admin/login";

        return [];
      }
      const result: BankApiResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Không thể lấy danh sách ngân hàng");
      }

      const data = Array.isArray(result.data) ? result.data : [];

      setAccounts(data.map(mapBank));

      return data.map(mapBank);
    } catch (err) {
      console.error("FETCH BANKS ERROR:", err);

      const message =
        err instanceof Error
          ? err.message
          : "Không thể lấy danh sách ngân hàng";

      setError(message);

      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // ====================================================
  // GET BANK DETAIL
  // ====================================================

  const getBankDetail = useCallback(async (id: number) => {
    try {
      setError(null);

      const response = await fetch(`/api/admin/bank/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      });
            if (response.status === 401) {
        localStorage.removeItem("admin-auth");

        window.location.href = "/admin/login";

        return [];
      }
      const result: BankApiResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Không thể lấy thông tin ngân hàng");
      }

      if (!Array.isArray(result.data)) {
        return mapBank(result.data);
      }

      return null;
    } catch (err) {
      console.error("GET BANK DETAIL ERROR:", err);

      const message =
        err instanceof Error
          ? err.message
          : "Không thể lấy thông tin ngân hàng";

      setError(message);

      return null;
    }
  }, []);

  // ====================================================
  // CREATE BANK
  // ====================================================

  const createBank = useCallback(
    async (data: {
      bankName: string;
      accountHolder: string;
      accountNumber: string;
      transferContent: string | null;
      isActive?: boolean;
    }) => {
      try {
        setAdding(true);
        setError(null);

        const response = await fetch("/api/admin/bank", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            bank_name: data.bankName,
            account_number: data.accountNumber,
            account_name: data.accountHolder.toUpperCase(),
            transfer_content: data.transferContent || null,
            status: data.isActive ?? false,
          }),
        });
            if (response.status === 401) {
        localStorage.removeItem("admin-auth");

        window.location.href = "/admin/login";

        return [];
      }
        const result: BankApiResponse = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message || "Không thể thêm tài khoản ngân hàng",
          );
        }

        if (!Array.isArray(result.data)) {
          const newBank = mapBank(result.data);

          setAccounts((prev) => [...prev, newBank]);

          return newBank;
        }

        return null;
      } catch (err) {
        console.error("CREATE BANK ERROR:", err);

        const message =
          err instanceof Error
            ? err.message
            : "Không thể thêm tài khoản ngân hàng";

        setError(message);

        throw new Error(message);
      } finally {
        setAdding(false);
      }
    },
    [],
  );

  // ====================================================
  // UPDATE BANK
  // ====================================================

  const updateBank = useCallback(
    async (
      id: number,
      data: {
        bankName?: string;
        accountHolder?: string;
        accountNumber?: string;
        transferContent?: string | null;
        isActive?: boolean;
      },
    ) => {
      try {
        setUpdating(true);
        setError(null);

        const body: Record<string, unknown> = {};

        if (data.bankName !== undefined) {
          body.bank_name = data.bankName;
        }

        if (data.accountHolder !== undefined) {
          body.account_name = data.accountHolder.toUpperCase();
        }

        if (data.accountNumber !== undefined) {
          body.account_number = data.accountNumber;
        }

        if (data.transferContent !== undefined) {
          body.transfer_content = data.transferContent;
        }

        if (data.isActive !== undefined) {
          body.status = data.isActive;
        }

        const response = await fetch(`/api/admin/bank/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        });
            if (response.status === 401) {
        localStorage.removeItem("admin-auth");

        window.location.href = "/admin/login";

        return [];
      }
        const result: BankApiResponse = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message || "Không thể cập nhật tài khoản ngân hàng",
          );
        }

        if (!Array.isArray(result.data)) {
          const updatedBank = mapBank(result.data);

          /*
           * Vì backend Laravel đã tự động tắt
           * các bank khác khi status = true,
           * nên load lại danh sách để đảm bảo
           * frontend khớp database.
           */
          await fetchBanks();

          return updatedBank;
        }

        return null;
      } catch (err) {
        console.error("UPDATE BANK ERROR:", err);

        const message =
          err instanceof Error
            ? err.message
            : "Không thể cập nhật tài khoản ngân hàng";

        setError(message);

        throw new Error(message);
      } finally {
        setUpdating(false);
      }
    },
    [fetchBanks],
  );

  // ====================================================
  // SET ACTIVE BANK
  // ====================================================

  const setActiveBank = useCallback(
    async (id: number) => {
      return updateBank(id, {
        isActive: true,
      });
    },
    [updateBank],
  );

  // ====================================================
  // DELETE BANK
  // ====================================================

  const deleteBank = useCallback(
    async (id: number) => {
      try {
        setDeleting(true);
        setError(null);

        const bank = accounts.find((item) => item.id === id);

        if (bank?.isActive) {
          throw new Error(
            "Không thể xóa tài khoản đang hoạt động. Vui lòng chọn tài khoản khác làm Active trước.",
          );
        }

        const response = await fetch(`/api/admin/bank/${id}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
            if (response.status === 401) {
        localStorage.removeItem("admin-auth");

        window.location.href = "/admin/login";

        return [];
      }
        const result: BankApiResponse = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message || "Không thể xóa tài khoản ngân hàng",
          );
        }

        setAccounts((prev) => prev.filter((account) => account.id !== id));

        return true;
      } catch (err) {
        console.error("DELETE BANK ERROR:", err);

        const message =
          err instanceof Error
            ? err.message
            : "Không thể xóa tài khoản ngân hàng";

        setError(message);

        throw new Error(message);
      } finally {
        setDeleting(false);
      }
    },
    [accounts],
  );

  // ====================================================
  // INITIAL LOAD
  // ====================================================

  useEffect(() => {
    fetchBanks();
  }, [fetchBanks]);

  // ====================================================
  // ACTIVE ACCOUNT
  // ====================================================

  const activeAccount = accounts.find((account) => account.isActive);

  // ====================================================
  // RETURN
  // ====================================================

  return {
    // Data
    accounts,
    activeAccount,

    // States
    loading,
    adding,
    updating,
    deleting,
    error,

    // APIs
    fetchBanks,
    getBankDetail,
    createBank,
    updateBank,
    setActiveBank,
    deleteBank,
  };
}
