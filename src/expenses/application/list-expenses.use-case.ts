import { Injectable } from '@nestjs/common';
import { Expense } from '../domain/expense.entity';
import { ExpenseRepository } from '../domain/expense.repository';

@Injectable()
export class ListExpensesUseCase {
  constructor(private readonly expenseRepository: ExpenseRepository) { }

  async execute(): Promise<Expense[]> {
    return this.expenseRepository.findAll();
  }
}
