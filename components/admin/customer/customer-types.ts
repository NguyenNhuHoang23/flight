export interface Customer {
  id: number;
  name: string;
  email: string;
  balance: string;
  role: "admin" | "customer";
  created_at?: string;
  updated_at?: string;
}

export interface CustomerFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  balance: string;
}
