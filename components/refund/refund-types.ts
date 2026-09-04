export interface RefundCommand {
  id: string;
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  amount: number;
  date: string;
  time: string;
  ampm: "AM" | "PM";
  note: string;
  status: "pending" | "approved" | "rejected";
}

export interface CustomerGroup {
  userId: string;
  username: string;
  balance: number;
  availableBalance: number;
  pendingTotal: number;
  commands: RefundCommand[];
}

export type RefundStatus = "pending" | "approved" | "rejected";
