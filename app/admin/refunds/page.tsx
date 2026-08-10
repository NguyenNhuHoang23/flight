"use client";

import React, { useMemo, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { CustomerGroup, RefundCommand } from "@/components/refund/refund-types";

import RefundCustomerGroup from "@/components/refund/RefundCustomerGroup";
import { useRefunds } from "@/hook/useRefunds";
import { useAuthStore } from "@/store/auth-store";

const normalizeRefundTime = (value?: string | null) => {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  const match = trimmed.match(/^(\d{1,2})(?::(\d{1,2})(?::(\d{1,2}))?)?$/);

  if (!match) {
    return null;
  }

  const hour = Number(match[1]);
  const minute = Number(match[2] || "0");

  if (Number.isNaN(hour) || Number.isNaN(minute)) {
    return null;
  }

  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    return null;
  }

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
};

const formatRefundTimeForApi = (value?: string | null) => {
  const rawTime = value?.trim() ?? "";
  const normalizedTime = normalizeRefundTime(rawTime);

  if (normalizedTime) {
    return normalizedTime;
  }

  if (/^\d{1,2}:\d{1,2}(?::\d{1,2})?$/.test(rawTime)) {
    const [hour, minute] = rawTime.split(":");
    const hourNumber = Number(hour);
    const minuteNumber = Number(minute);

    if (
      !Number.isNaN(hourNumber) &&
      !Number.isNaN(minuteNumber) &&
      hourNumber >= 0 &&
      hourNumber <= 23 &&
      minuteNumber >= 0 &&
      minuteNumber <= 59
    ) {
      return `${String(hourNumber).padStart(2, "0")}:${String(minuteNumber).padStart(2, "0")}`;
    }
  }

  return rawTime || "00:00";
};

export default function GroupedRefundPage() {
  const token = useAuthStore((state) => state.accessToken);
  const { data, isLoading, isError, error, refetch } = useRefunds(token || "");

  const { mutate: createRefund, isPending: isCreatingRefund } = useMutation({
    mutationFn: async ({
      userId,
      command,
    }: {
      userId: string;
      command: RefundCommand;
    }) => {
      console.log("🚀 ~ GroupedRefundPage ~ command:", command);
      if (!token) {
        throw new Error("Bạn chưa đăng nhập");
      }

      const normalizedTime = formatRefundTimeForApi(command.time);

      const response = await fetch("/api/refund", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: Number(userId),
          bank_name: command.bankName,
          account_holder: command.accountHolder,
          account_number: command.accountNumber,
          amount: Number(command.amount),
          date: command.date || null,
          time: normalizedTime,
          ampm: command.ampm || "AM",
          note: command.note || "",
          status: "pending",
        }),
      });

      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || "Không thể tạo lệnh hoàn tiền mới");
      }

      return payload;
    },
  });

  const [savedCommandId, setSavedCommandId] = useState<string | null>(null);
  const [draftCommands, setDraftCommands] = useState<
    Record<string, Partial<RefundCommand>>
  >({});

  const { mutate: updateRefund, isPending: isUpdatingRefund } = useMutation({
    mutationFn: async ({
      commandId,
      payload,
    }: {
      commandId: string;
      payload: Record<string, unknown>;
    }) => {
      if (!token) {
        throw new Error("Bạn chưa đăng nhập");
      }

      const response = await fetch(`/api/admin/refunds/${commandId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Không thể cập nhật lệnh hoàn tiền");
      }

      return data;
    },
  });

  const { mutate: updateStatus, isPending: isUpdatingStatus } = useMutation({
    mutationFn: async ({
      commandId,
      status,
      payload,
    }: {
      commandId: string;
      status: "approved" | "rejected";
      payload: Record<string, unknown>;
    }) => {
      if (!token) {
        throw new Error("Bạn chưa đăng nhập");
      }

      const endpoint =
        status === "approved"
          ? `/api/admin/refunds/${commandId}/approve`
          : `/api/admin/refunds/${commandId}/reject`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            (status === "approved"
              ? "Không thể duyệt lệnh hoàn tiền"
              : "Không thể hủy lệnh hoàn tiền"),
        );
      }

      return data;
    },
  });

  const buildRefundPayload = (command: RefundCommand) => ({
    bank_name: command.bankName,
    account_holder: command.accountHolder,
    account_number: command.accountNumber,
    amount: Number(command.amount),
    date: command.date || null,
    time: formatRefundTimeForApi(command.time),
    ampm: command.ampm || "AM",
    note: command.note || "",
    status: command.status,
  });

  const customerGroups = useMemo<CustomerGroup[]>(() => {
    const refunds = data?.data ?? [];

    const groups = new Map<string, CustomerGroup>();

    refunds.forEach((refund) => {
      const userId = String(refund.user_id);

      if (!groups.has(userId)) {
        groups.set(userId, {
          userId,
          username:
            refund.user?.name || refund.user?.email || `User #${userId}`,
          commands: [],
        });
      }

      const group = groups.get(userId)!;

      const commandBase: RefundCommand = {
        id: String(refund.id),

        bankName: refund.bank_name,
        accountHolder: refund.account_holder,
        accountNumber: refund.account_number,

        amount: Number(refund.amount),

        date: refund.date || "",
        time: refund.time || "",
        ampm: refund.ampm || "AM",

        note: refund.note || "",

        status: refund.status,
      };

      const command: RefundCommand = {
        ...commandBase,
        ...(draftCommands[String(refund.id)] ?? {}),
      };

      group.commands.push(command);
    });

    return Array.from(groups.values());
  }, [data, draftCommands]);

  const getMergedCommand = (commandId: string) => {
    const found = customerGroups
      .flatMap((group) => group.commands)
      .find((command) => command.id === commandId);

    if (!found) {
      return null;
    }

    const draft = draftCommands[commandId];

    if (!draft) {
      return found;
    }

    return {
      ...found,
      ...draft,
    } as RefundCommand;
  };

  /**
   * ============================
   * UPDATE LOCAL UI
   * ============================
   *
   * Tạm thời giữ lại để component
   * hoạt động như code cũ.
   *
   * Khi làm API PUT sẽ chuyển
   * phần này thành gọi API.
   */

  const updateCommand = (
    userId: string,
    commandId: string,
    field: keyof RefundCommand,
    value: RefundCommand[keyof RefundCommand],
  ) => {
    setDraftCommands((prev) => ({
      ...prev,
      [commandId]: {
        ...(prev[commandId] ?? {}),
        [field]: value,
      },
    }));
  };

  /**
   * ============================
   * TIME / AM PM
   * ============================
   */

  const handleTimeChange = (
    userId: string,
    commandId: string,
    newTime?: string,
    newAmPm?: "AM" | "PM",
  ) => {
    setDraftCommands((prev) => ({
      ...prev,
      [commandId]: {
        ...(prev[commandId] ?? {}),
        ...(newTime !== undefined ? { time: newTime } : {}),
        ...(newAmPm !== undefined ? { ampm: newAmPm } : {}),
      },
    }));
  };

  /**
   * ============================
   * ADD
   * ============================
   */

  const handleAddCommand = (userId: string, commandId: string) => {
    const sourceCommand = getMergedCommand(commandId);

    if (!sourceCommand) {
      return;
    }

    createRefund(
      {
        userId,
        command: {
          ...sourceCommand,
          time: formatRefundTimeForApi(sourceCommand.time),
          ampm: sourceCommand.ampm || "AM",
        },
      },
      {
        onSuccess: () => {
          refetch();
        },
        onError: (error) => {
          alert(
            error instanceof Error
              ? error.message
              : "Không thể tạo lệnh hoàn tiền mới",
          );
        },
      },
    );
  };

  /**
   * ============================
   * SAVE
   * ============================
   */

  const handleSave = (commandId: string) => {
    const currentCommand = getMergedCommand(commandId);

    if (!currentCommand) {
      return;
    }

    updateRefund(
      {
        commandId,
        payload: buildRefundPayload(currentCommand),
      },
      {
        onSuccess: () => {
          setSavedCommandId(commandId);
          setDraftCommands((prev) => {
            const next = { ...prev };
            delete next[commandId];
            return next;
          });
          refetch();

          setTimeout(() => {
            setSavedCommandId(null);
          }, 1500);
        },
        onError: (error) => {
          alert(
            error instanceof Error
              ? error.message
              : "Không thể lưu thay đổi lệnh hoàn tiền",
          );
        },
      },
    );
  };

  /**
   * ============================
   * STATUS
   * ============================
   */

  const handleStatusChange = (
    userId: string,
    commandId: string,
    status: "approved" | "rejected",
  ) => {
    const actionText = status === "approved" ? "duyệt" : "hủy";

    if (!confirm(`Xác nhận ${actionText} lệnh này?`)) {
      return;
    }

    const currentCommand = getMergedCommand(commandId);

    if (!currentCommand) {
      return;
    }

    updateStatus(
      {
        commandId,
        status,
        payload: {
          note: currentCommand.note || "",
          status,
        },
      },
      {
        onSuccess: () => {
          refetch();
        },
        onError: (error) => {
          alert(
            error instanceof Error
              ? error.message
              : "Không thể thay đổi trạng thái lệnh hoàn tiền",
          );
        },
      },
    );
  };

  /**
   * ============================
   * LOADING
   * ============================
   */

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-sm text-slate-500">
          Đang tải danh sách hoàn tiền...
        </div>
      </div>
    );
  }

  /**
   * ============================
   * ERROR
   * ============================
   */

  if (isError) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-5">
        <p className="font-semibold text-red-700">
          Không thể tải danh sách hoàn tiền
        </p>

        <p className="mt-1 text-sm text-red-600">
          {error instanceof Error ? error.message : "Có lỗi xảy ra"}
        </p>

        <button
          onClick={() => refetch()}
          className="mt-3 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Thử lại
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}

      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Quản lý Lệnh Rút / Hoàn Tiền
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Quản lý các yêu cầu rút tiền của khách hàng.
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Tổng số yêu cầu: <b>{data?.data?.length ?? 0}</b>
        </p>
      </div>

      {/* EMPTY */}

      {customerGroups.length === 0 && (
        <div className="rounded-xl border border-slate-200 bg-white py-16 text-center">
          <p className="text-sm text-slate-500">
            Chưa có yêu cầu hoàn tiền nào.
          </p>
        </div>
      )}

      {/* CUSTOMER GROUPS */}

      <div className="space-y-6">
        {customerGroups.map((group) => (
          <RefundCustomerGroup
            key={group.userId}
            group={group}
            savedCommandId={savedCommandId}
            isCreating={
              isCreatingRefund || isUpdatingRefund || isUpdatingStatus
            }
            onChange={(commandId, field, value) =>
              updateCommand(group.userId, commandId, field, value)
            }
            onTimeChange={(commandId, newTime, newAmPm) =>
              handleTimeChange(group.userId, commandId, newTime, newAmPm)
            }
            onAddCommand={(commandId) =>
              handleAddCommand(group.userId, commandId)
            }
            onSave={handleSave}
            onStatusChange={(commandId, status) =>
              handleStatusChange(group.userId, commandId, status)
            }
          />
        ))}
      </div>
    </div>
  );
}
