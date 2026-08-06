"use client";

import React, { useState, useEffect } from "react";

interface RefundCommand {
  id: string;
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  amount: number;
  date: string; // YYYY-MM-DD
  time: string; // Lưu dạng 24h (Ví dụ PM: "14:30", AM: "09:30")
  ampm: "AM" | "PM";
  note: string;
  status: "pending" | "approved" | "rejected";
}

interface CustomerGroup {
  userId: string;
  username: string;
  commands: RefundCommand[];
}

const INITIAL_GROUPS: CustomerGroup[] = [
  {
    userId: "713",
    username: "hoangvanson",
    commands: [
      {
        id: "cmd_101",
        bankName: "VIB - Ngân hàng TMCP Quốc Tế",
        accountHolder: "NGÔ THANH NHÀN",
        accountNumber: "2266789001",
        amount: 5090000,
        date: "2026-08-06",
        time: "21:44", // 21:44 PM
        ampm: "PM",
        note: "Khách yêu cầu rút tiền",
        status: "pending",
      },
    ],
  },
];

export default function GroupedRefundPage() {
  const [customerGroups, setCustomerGroups] = useState<CustomerGroup[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("user_refund_groups");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
    }
    return INITIAL_GROUPS;
  });

  const [savedCommandId, setSavedCommandId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("user_refund_groups", JSON.stringify(customerGroups));
  }, [customerGroups]);

  // Cập nhật thông tin thông thường
  const handleInputChange = (
    userId: string,
    commandId: string,
    field: keyof RefundCommand,
    value: any,
  ) => {
    setCustomerGroups((prev) =>
      prev.map((group) => {
        if (group.userId !== userId) return group;
        return {
          ...group,
          commands: group.commands.map((cmd) =>
            cmd.id === commandId ? { ...cmd, [field]: value } : cmd,
          ),
        };
      }),
    );
  };

  // XỬ LÝ KHI THAY ĐỔI GIỜ HOẶC CHỌN AM/PM
  const handleTimeOrAmPmChange = (
    userId: string,
    commandId: string,
    newTimeVal?: string,
    newAmPmVal?: "AM" | "PM",
  ) => {
    setCustomerGroups((prev) =>
      prev.map((group) => {
        if (group.userId !== userId) return group;

        return {
          ...group,
          commands: group.commands.map((cmd) => {
            if (cmd.id !== commandId) return cmd;

            let selectedAmPm = newAmPmVal ?? cmd.ampm;
            let timeString = newTimeVal ?? cmd.time;

            if (!timeString) return { ...cmd, ampm: selectedAmPm };

            let [h, m] = timeString.split(":");
            let hours = parseInt(h, 10);

            // Tự động ép giờ về đúng khoảng khi người dùng đổi AM/PM
            if (selectedAmPm === "PM" && hours < 12) {
              hours += 12; // Ví dụ nhập 09:30 mà chọn PM -> Đổi thành 21:30
            } else if (selectedAmPm === "AM" && hours >= 12) {
              hours -= 12; // Ví dụ nhập 21:30 mà chọn AM -> Đổi thành 09:30
            }

            const formattedHours = hours.toString().padStart(2, "0");
            const updatedTime = `${formattedHours}:${m}`;

            return {
              ...cmd,
              time: updatedTime,
              ampm: selectedAmPm,
            };
          }),
        };
      }),
    );
  };

  const handleAddCommandToGroup = (
    userId: string,
    sourceCmd: RefundCommand,
  ) => {
    const newCommand: RefundCommand = {
      ...sourceCmd,
      id: "cmd_" + Date.now(),
      status: "pending",
    };

    setCustomerGroups((prev) =>
      prev.map((group) => {
        if (group.userId !== userId) return group;

        const sourceIndex = group.commands.findIndex(
          (c) => c.id === sourceCmd.id,
        );
        const updatedCmds = [...group.commands];
        updatedCmds.splice(sourceIndex + 1, 0, newCommand);

        return {
          ...group,
          commands: updatedCmds,
        };
      }),
    );
  };

  const handleSaveCommand = (commandId: string) => {
    setSavedCommandId(commandId);
    setTimeout(() => setSavedCommandId(null), 1500);
  };

  const handleStatusChange = (
    userId: string,
    commandId: string,
    newStatus: "approved" | "rejected",
  ) => {
    const actionText = newStatus === "approved" ? "duyệt" : "hủy";
    if (confirm(`Xác nhận ${actionText} lệnh này?`)) {
      setCustomerGroups((prev) =>
        prev.map((group) => {
          if (group.userId !== userId) return group;
          return {
            ...group,
            commands: group.commands.map((cmd) =>
              cmd.id === commandId ? { ...cmd, status: newStatus } : cmd,
            ),
          };
        }),
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h1 className="text-xl font-bold text-slate-900">
            Quản lý Lệnh Rút / Hoàn Tiền (Giới hạn khung giờ AM / PM)
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Chọn <strong>PM</strong>: Giờ sẽ chỉ cho phép chọn từ 12:00 đến
            23:59.
          </p>
        </div>

        {customerGroups.map((group) => (
          <div
            key={group.userId}
            className="bg-white rounded-xl border-2 border-blue-200 shadow-sm overflow-hidden"
          >
            <div className="bg-blue-50/80 px-5 py-3 border-b border-blue-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded">
                  ID USER: #{group.userId}
                </span>
                <span className="font-bold text-slate-900 text-sm">
                  Khách hàng: {group.username}
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase">
                    <th className="py-2.5 px-4 w-72">THÔNG TIN RÚT</th>
                    <th className="py-2.5 px-4 w-48">SỐ TIỀN RÚT</th>
                    <th className="py-2.5 px-4 w-60">
                      THỜI GIAN (LỌC THEO PM)
                    </th>
                    <th className="py-2.5 px-4">GHI CHÚ</th>
                    <th className="py-2.5 px-4 text-center w-40">THAO TÁC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {group.commands.map((cmd) => (
                    <tr key={cmd.id} className="hover:bg-slate-50/80 align-top">
                      {/* THÔNG TIN NGÂN HÀNG */}
                      <td className="py-3 px-4 space-y-1">
                        <div className="flex items-center gap-1">
                          <span className="text-slate-400 w-16 shrink-0">
                            Ngân hàng:
                          </span>
                          <input
                            type="text"
                            value={cmd.bankName}
                            onChange={(e) =>
                              handleInputChange(
                                group.userId,
                                cmd.id,
                                "bankName",
                                e.target.value,
                              )
                            }
                            className="w-full border border-slate-300 rounded px-2 py-1 font-medium outline-none focus:border-blue-500"
                          />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-slate-400 w-16 shrink-0">
                            CTK:
                          </span>
                          <input
                            type="text"
                            value={cmd.accountHolder}
                            onChange={(e) =>
                              handleInputChange(
                                group.userId,
                                cmd.id,
                                "accountHolder",
                                e.target.value,
                              )
                            }
                            className="w-full border border-slate-300 rounded px-2 py-1 font-bold uppercase outline-none focus:border-blue-500"
                          />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-slate-400 w-16 shrink-0">
                            STK:
                          </span>
                          <input
                            type="text"
                            value={cmd.accountNumber}
                            onChange={(e) =>
                              handleInputChange(
                                group.userId,
                                cmd.id,
                                "accountNumber",
                                e.target.value,
                              )
                            }
                            className="w-full border border-slate-300 rounded px-2 py-1 font-mono font-bold text-blue-600 outline-none focus:border-blue-500"
                          />
                        </div>
                      </td>

                      {/* SỐ TIỀN */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          <span className="text-slate-400 shrink-0">
                            Số tiền:
                          </span>
                          <input
                            type="number"
                            value={cmd.amount}
                            onChange={(e) =>
                              handleInputChange(
                                group.userId,
                                cmd.id,
                                "amount",
                                Number(e.target.value),
                              )
                            }
                            className="w-full border border-slate-300 rounded px-2 py-1 font-bold text-emerald-600 outline-none focus:border-blue-500"
                          />
                        </div>
                      </td>

                      {/* THỜI GIAN - DÙNG MIN/MAX ĐỂ KHÓA GIỜ AM HOẶC PM */}
                      <td className="py-3 px-4 space-y-1">
                        <div className="flex items-center gap-1">
                          <input
                            type="time"
                            value={cmd.time}
                            /* GIỚI HẠN KHUNG GIỜ DỰA VÀO AM / PM */
                            min={cmd.ampm === "PM" ? "12:00" : "00:00"}
                            max={cmd.ampm === "PM" ? "23:59" : "11:59"}
                            onChange={(e) =>
                              handleTimeOrAmPmChange(
                                group.userId,
                                cmd.id,
                                e.target.value,
                                undefined,
                              )
                            }
                            className="border border-slate-300 rounded px-1.5 py-1 font-medium outline-none focus:border-blue-500"
                          />

                          <select
                            value={cmd.ampm}
                            onChange={(e) =>
                              handleTimeOrAmPmChange(
                                group.userId,
                                cmd.id,
                                undefined,
                                e.target.value as "AM" | "PM",
                              )
                            }
                            className={`border rounded px-1.5 py-1 font-bold outline-none cursor-pointer ${
                              cmd.ampm === "PM"
                                ? "bg-amber-100 text-amber-800 border-amber-300"
                                : "bg-sky-100 text-sky-800 border-sky-300"
                            }`}
                          >
                            <option value="AM">AM (Sáng)</option>
                            <option value="PM">PM (Chiều/Tối)</option>
                          </select>
                        </div>

                        <input
                          type="date"
                          value={cmd.date}
                          onChange={(e) =>
                            handleInputChange(
                              group.userId,
                              cmd.id,
                              "date",
                              e.target.value,
                            )
                          }
                          className="w-full border border-slate-300 rounded px-2 py-1 font-medium outline-none focus:border-blue-500"
                        />
                      </td>

                      {/* GHI CHÚ */}
                      <td className="py-3 px-4">
                        <textarea
                          rows={2}
                          value={cmd.note}
                          placeholder="Ghi chú..."
                          onChange={(e) =>
                            handleInputChange(
                              group.userId,
                              cmd.id,
                              "note",
                              e.target.value,
                            )
                          }
                          className="w-full border border-slate-300 rounded px-2 py-1 focus:border-blue-500 outline-none resize-none"
                        />
                      </td>

                      {/* THAO TÁC */}
                      <td className="py-3 px-4 text-center space-y-2">
                        <button
                          onClick={() =>
                            handleAddCommandToGroup(group.userId, cmd)
                          }
                          className="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-semibold py-1 px-2 rounded text-[11px] transition"
                        >
                          + Thêm 1 lệnh
                        </button>

                        {cmd.status === "pending" ? (
                          <>
                            <div className="flex items-center justify-center gap-1">
                              <button
                                onClick={() =>
                                  handleStatusChange(
                                    group.userId,
                                    cmd.id,
                                    "approved",
                                  )
                                }
                                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded text-[11px]"
                              >
                                Duyệt
                              </button>
                              <button
                                onClick={() =>
                                  handleStatusChange(
                                    group.userId,
                                    cmd.id,
                                    "rejected",
                                  )
                                }
                                className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-bold py-1 px-2 rounded text-[11px]"
                              >
                                Hủy
                              </button>
                            </div>

                            <button
                              onClick={() => handleSaveCommand(cmd.id)}
                              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-0.5 px-2 rounded text-[11px]"
                            >
                              {savedCommandId === cmd.id ? "✓ Đã lưu" : "Lưu"}
                            </button>
                          </>
                        ) : (
                          <span
                            className={`inline-block px-2 py-0.5 rounded font-bold text-[11px] ${
                              cmd.status === "approved"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-rose-100 text-rose-800"
                            }`}
                          >
                            {cmd.status === "approved" ? "Đã duyệt" : "Đã hủy"}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
