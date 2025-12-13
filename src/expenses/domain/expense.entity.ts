export enum ExpenseStatus {
  PENDING = 'PENDING',
  AWAITING_PAYMENT = 'AWAITING_PAYMENT',
  PAID = 'PAID',
}

export class Expense {
  id: string;
  name: string;
  value: number;
  status: ExpenseStatus;
  approved: boolean;
  created_at?: Date;

  constructor(partial: Partial<Expense>) {
    Object.assign(this, partial);
  }
}
