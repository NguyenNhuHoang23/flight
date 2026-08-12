export interface Customer {
  id: number;
  username: string;
  balance: number | string | null;
  role: "admin" | "customer";
  created_at: string;
  updated_at?: string;
}

export interface CustomerFormData {
  username: string;
  password: string;
  balance: string;
}
