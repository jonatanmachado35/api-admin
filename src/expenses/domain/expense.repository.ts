import { Expense } from './expense.entity';

export abstract class ExpenseRepository {
  abstract create(expense: Expense): Promise<Expense>;
  abstract findById(id: string): Promise<Expense | null>;
  abstract findAll(): Promise<Expense[]>;
  abstract update(id: string, data: Partial<Expense>): Promise<void>;
}
