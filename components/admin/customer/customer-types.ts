export interface Customer {
  id: number;
  username: string;
  role: "admin" | "customer";
  balance: number | string | null;
  created_at: string;
  updated_at: string;
}

export interface CustomerFormData {
  username: string;
  password: string;
  balance: string;
}
