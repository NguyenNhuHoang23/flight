"use client";

import React from "react";
import {
  Users,
  ShoppingBag,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  MoreVertical,
  ChevronRight,
} from "lucide-react";
import { useAuthStore } from "@/store/auth-store";
import { useRefunds } from "@/hook/useRefunds";

export default function AdminDashboard() {
    const token = useAuthStore((state) => state.accessToken);
    const { isLoading } = useRefunds(token || "", 1, 10);
    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-lg font-semibold text-slate-700">
                    Đang tải dữ liệu...
                </div>
            </div>
        );
    }
  const stats = [
    {
      title: "Tổng doanh thu",
      value: "$128,430.00",
      change: "+12.5%",
      isPositive: true,
      icon: DollarSign,
      subtext: "so với tháng trước",
    },
    {
      title: "Đơn hàng mới",
      value: "1,429",
      change: "+8.2%",
      isPositive: true,
      icon: ShoppingBag,
      subtext: "so với tháng trước",
    },
    {
      title: "Khách hàng mới",
      value: "892",
      change: "-2.4%",
      isPositive: false,
      icon: Users,
      subtext: "so với tháng trước",
    },
    {
      title: "Tỷ lệ chuyển đổi",
      value: "3.42%",
      change: "+1.8%",
      isPositive: true,
      icon: Activity,
      subtext: "so với tháng trước",
    },
  ];

  const recentOrders = [
    {
      id: "ORD-7829",
      customer: "Nguyễn Văn A",
      email: "anguyen@example.com",
      product: "Gói Premium 1 năm",
      amount: "$299.00",
      status: "Thành công",
      date: "01/08/2026",
    },
    {
      id: "ORD-7828",
      customer: "Trần Thị B",
      email: "btran@example.com",
      product: "Khóa học Web3 Master",
      amount: "$149.00",
      status: "Đang xử lý",
      date: "01/08/2026",
    },
    {
      id: "ORD-7827",
      customer: "Lê Minh C",
      email: "cle@example.com",
      product: "Gói Basic 6 tháng",
      amount: "$89.00",
      status: "Thành công",
      date: "31/07/2026",
    },
    {
      id: "ORD-7826",
      customer: "Phạm Hoàng D",
      email: "dpham@example.com",
      product: "Tư vấn 1-on-1",
      amount: "$120.00",
      status: "Hủy",
      date: "31/07/2026",
    },
  ];

  return (
    <>
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Tổng quan hệ thống
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Xin chào Hoàng, đây là tình hình kinh doanh hôm nay.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-slate-200 p-1.5 rounded-xl text-xs font-medium text-slate-600">
          <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 font-semibold shadow-xs">
            7 ngày
          </button>
          <button className="px-3 py-1.5 rounded-lg hover:bg-slate-50">
            30 ngày
          </button>
          <button className="px-3 py-1.5 rounded-lg hover:bg-slate-50">
            Năm nay
          </button>
        </div>
      </div>

      {/* 1. STAT CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.title}
                </span>
                <div className="p-2.5 rounded-xl bg-slate-50 text-indigo-600 border border-slate-100">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </span>
                <span
                  className={`flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${
                    stat.isPositive
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-rose-50 text-rose-600"
                  }`}
                >
                  {stat.isPositive ? (
                    <TrendingUp className="w-3.5 h-3.5 mr-1" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5 mr-1" />
                  )}
                  {stat.change}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">{stat.subtext}</p>
            </div>
          );
        })}
      </div>

      {/* 2. CHART & SUMMARY SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Doanh thu & Chi phí
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Thống kê theo từng tháng
              </p>
            </div>
            <button className="text-slate-400 hover:text-slate-600 p-1">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="h-64 flex items-end gap-3 sm:gap-6 pt-8 pb-2 px-2 border-b border-slate-100">
            {[
              { month: "T1", val1: "40%", val2: "60%" },
              { month: "T2", val1: "55%", val2: "75%" },
              { month: "T3", val1: "35%", val2: "50%" },
              { month: "T4", val1: "70%", val2: "90%" },
              { month: "T5", val1: "60%", val2: "80%" },
              { month: "T6", val1: "85%", val2: "95%" },
              { month: "T7", val1: "50%", val2: "70%" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center gap-2 h-full justify-end group"
              >
                <div className="w-full flex items-end justify-center gap-1 h-full">
                  <div
                    className="w-full max-w-[18px] bg-indigo-500 rounded-t-md transition-all group-hover:bg-indigo-600"
                    style={{ height: item.val2 }}
                  />
                  <div
                    className="w-full max-w-[18px] bg-slate-200 rounded-t-md transition-all group-hover:bg-slate-300"
                    style={{ height: item.val1 }}
                  />
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {item.month}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-4 pt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-xs text-slate-600 font-medium">
                Doanh thu
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <span className="text-xs text-slate-600 font-medium">
                Chi phí
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
          <h2 className="text-base font-semibold text-slate-900 mb-4">
            Hoạt động mới nhất
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Đơn hàng mới #ORD-7829",
                time: "5 phút trước",
              },
              {
                title: "Khách hàng mới đăng ký",
                time: "12 phút trước",
              },
              {
                title: "Thanh toán $299.00 nhận được",
                time: "1 giờ trước",
              },
              {
                title: "Hệ thống cập nhật v2.4.0",
                time: "3 giờ trước",
              },
            ].map((act, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-sm pb-3 border-b border-slate-100 last:border-none last:pb-0"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                <div>
                  <p className="font-medium text-slate-800">{act.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. RECENT ORDERS TABLE */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-6 flex items-center justify-between border-b border-slate-100">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Đơn hàng gần đây
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Danh sách giao dịch trong ngày hôm nay
            </p>
          </div>
          <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
            Xem tất cả <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50/70 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
              <tr>
                <th className="px-6 py-3.5">Mã đơn</th>
                <th className="px-6 py-3.5">Khách hàng</th>
                <th className="px-6 py-3.5">Sản phẩm</th>
                <th className="px-6 py-3.5">Số tiền</th>
                <th className="px-6 py-3.5">Trạng thái</th>
                <th className="px-6 py-3.5 text-right">Ngày</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-slate-50/60 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-slate-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-slate-800">
                        {order.customer}
                      </p>
                      <p className="text-xs text-slate-400">{order.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{order.product}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        order.status === "Thành công"
                          ? "bg-emerald-50 text-emerald-700"
                          : order.status === "Đang xử lý"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-rose-50 text-rose-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-400 text-xs">
                    {order.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
