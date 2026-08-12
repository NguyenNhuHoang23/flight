export interface BankAccount {
  id: number;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  transferContent: string | null;
  isActive: boolean;
}
