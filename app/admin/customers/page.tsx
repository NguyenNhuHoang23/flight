"use client";

import React, { useState } from "react";

import { useCustomers } from "@/hook/useCustomers";
import { useAuthStore } from "@/store/auth-store";
import CustomerTable from "@/components/admin/customer/CustomerTable";
import CustomerModal from "@/components/admin/customer/CustomerModal";
import { CustomerFormData } from "@/components/admin/customer/customer-types";
import { Customer } from "@/components/admin/customer/customer-types";
import { parseVndAmount } from "@/lib/refund-balance";

const INITIAL_FORM: CustomerFormData = {
  username: "",
  password: "",
  balance: "",
};

export default function CustomerManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingCustomer, setEditingCustomer] =
    useState<Customer | null>(null);

  const [formData, setFormData] =
    useState<CustomerFormData>(INITIAL_FORM);

  const [submitting, setSubmitting] = useState(false);

  const token = useAuthStore.getState().accessToken || "";

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useCustomers(token);

  const customers = data?.data?.data ?? [];

  // =========================
  // OPEN CREATE
  // =========================

  const handleOpenCreateModal = () => {
    setEditingCustomer(null);
    setFormData(INITIAL_FORM);
    setIsModalOpen(true);
  };

  // =========================
  // OPEN EDIT
  // =========================

  const handleOpenEditModal = (customer: Customer) => {
    setEditingCustomer(customer);

    setFormData({
      username: customer.username,
      password: "",
      balance: String(parseVndAmount(customer.balance)),
    });

    setIsModalOpen(true);
  };

  // =========================
  // CLOSE
  // =========================

  const handleCloseModal = () => {
    if (submitting) return;

    setIsModalOpen(false);
    setEditingCustomer(null);
    setFormData(INITIAL_FORM);
  };

  // =========================
  // CREATE / UPDATE
  // =========================

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const isEdit = !!editingCustomer;

      const url = isEdit
        ? `/api/admin/account/${editingCustomer.id}`
        : "/api/admin/account";

      const method = isEdit ? "PUT" : "POST";

      const body: Record<string, unknown> = {
        username: formData.username,
        balance: parseVndAmount(formData.balance),
      };

      // Tạo mới bắt buộc có password
      if (!isEdit) {
        body.password = formData.password;
        body.role = "customer";
      }

      // Cập nhật chỉ gửi password nếu người dùng nhập
      if (isEdit && formData.password) {
        body.password = formData.password;
      }

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          const firstError = Object.values(result.errors)
            .flat()
            .at(0);

          throw new Error(
            String(firstError || result.message)
          );
        }

        throw new Error(
          result.message || "Không thể thực hiện thao tác"
        );
      }

      alert(
        isEdit
          ? "Cập nhật tài khoản thành công!"
          : "Tạo tài khoản thành công!"
      );

      handleCloseModal();

      await refetch();
    } catch (error) {
      console.error("Customer submit error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Có lỗi xảy ra"
      );
    } finally {
      setSubmitting(false);
    }
  };

  // =========================
  // DELETE
  // =========================

  const handleDelete = async (id: number) => {
    if (!confirm("Bạn có chắc chắn muốn xóa khách hàng này?")) {
      return;
    }

    try {
      const response = await fetch(
        `/api/admin/account/${id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Không thể xóa tài khoản"
        );
      }

      alert("Xóa tài khoản thành công!");

      await refetch();
    } catch (error) {
      console.error("Delete customer error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Có lỗi xảy ra khi xóa"
      );
    }
  };

  return (
    <div>
      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Danh sách Khách hàng
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Quản lý tài khoản khách hàng
          </p>
        </div>

        <button
          onClick={handleOpenCreateModal}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
        >
          + Tạo tài khoản
        </button>
      </div>

      {/* TABLE */}

      <CustomerTable
        customers={customers}
        isLoading={isLoading}
        isError={isError}
        error={error instanceof Error ? error : null}
        onEdit={handleOpenEditModal}
        onDelete={handleDelete}
      />

      {/* MODAL */}

      <CustomerModal
        isOpen={isModalOpen}
        editingCustomer={editingCustomer}
        formData={formData}
        submitting={submitting}
        onChange={setFormData}
        onSubmit={handleSubmit}
        onClose={handleCloseModal}
      />
    </div>
  );
}
