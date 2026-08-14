"use client";

import React, { useState } from "react";
import { useBankAccounts } from "@/hook/useBankAccounts";
import { useAuthStore } from "@/store/auth-store";
import AddBankAccountModal, {
  NewBankAccount,
} from "@/components/admin/bank/AddBankAccountModal";
import EditBankAccountModal from "@/components/admin/bank/EditBankAccountModal";
import BankAccountHeader from "@/components/admin/bank/BankAccountHeader";
import ActiveBankAccount from "@/components/admin/bank/ActiveBankAccount";
import BankAccountTable from "@/components/admin/bank/BankAccountTable";
import type { BankAccount } from "@/components/admin/bank/types";

export default function BankAccountListPage() {
  const token = useAuthStore.getState().accessToken;

  const {
    accounts,
    activeAccount,
    loading,
    adding,
    updating,
    deleting,
    createBank,
    updateBank,
    setActiveBank,
    deleteBank,
  } = useBankAccounts(token || "");

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingAccount, setEditingAccount] = useState<BankAccount | null>(
    null,
  );

  // ====================================================
  // ADD
  // ====================================================

  const handleAddAccount = async (data: NewBankAccount) => {
    await createBank({
      bankName: data.bankName,
      accountHolder: data.accountHolder,
      accountNumber: data.accountNumber,
      transferContent: data.transferContent,

      // Tài khoản đầu tiên tự động active
      isActive: accounts.length === 0,
    });

    alert("Thêm tài khoản thành công!");
  };

  // ====================================================
  // UPDATE
  // ====================================================

  const handleUpdateAccount = async (data: NewBankAccount) => {
    if (!editingAccount) return;

    await updateBank(editingAccount.id, {
      bankName: data.bankName,
      accountHolder: data.accountHolder,
      accountNumber: data.accountNumber,
      transferContent: data.transferContent,
    });

    alert("Cập nhật tài khoản thành công!");
  };

  // ====================================================
  // SET ACTIVE
  // ====================================================

  const handleSetActiveAccount = async (id: number) => {
    try {
      await setActiveBank(id);

      alert("Đã chuyển tài khoản nhận tiền chính!");
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Không thể kích hoạt tài khoản",
      );
    }
  };

  // ====================================================
  // DELETE
  // ====================================================

  const handleDeleteAccount = async (id: number) => {
    const account = accounts.find((item) => item.id === id);

    if (account?.isActive) {
      alert(
        "Không thể xóa tài khoản đang hoạt động! Vui lòng chọn tài khoản khác làm Active trước.",
      );

      return;
    }

    const confirmed = confirm("Bạn có chắc chắn muốn xóa tài khoản này?");

    if (!confirmed) return;

    try {
      await deleteBank(id);

      alert("Xóa tài khoản thành công!");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Không thể xóa tài khoản");
    }
  };

  // ====================================================
  // LOADING
  // ====================================================

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="text-sm text-slate-500">
          Đang tải danh sách tài khoản ngân hàng...
        </div>
      </div>
    );
  }

  // ====================================================
  // UI
  // ====================================================

  return (
    <div className="space-y-5">
      <BankAccountHeader onAdd={() => setShowAddModal(true)} adding={adding} />

      <ActiveBankAccount account={activeAccount ?? null} />

      <BankAccountTable
        accounts={accounts }
        updating={updating}
        deleting={deleting}
        onSetActive={handleSetActiveAccount}
        onEdit={setEditingAccount}
        onDelete={handleDeleteAccount}
      />

      <AddBankAccountModal
        open={showAddModal}
        adding={adding}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddAccount}
      />

      <EditBankAccountModal
        account={editingAccount}
        updating={updating}
        onClose={() => setEditingAccount(null)}
        onSubmit={handleUpdateAccount}
      />
    </div>
  );
}
