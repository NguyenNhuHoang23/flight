export type RefundStatus = "pending" | "approved" | "completed" | "rejected";

export interface RefundRecord {
  id: string | number;

  bankName: string;
  accountNumber: string;
  accountHolder: string;

  amount: number;

  status: RefundStatus;

  date?: string;
  time?: string;
  ampm?: "AM" | "PM";

  note?: string;

  createdAt: string;
  updatedAt?: string;
}
