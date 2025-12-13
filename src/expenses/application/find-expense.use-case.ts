import { Injectable, NotFoundException } from '@nestjs/common';
import { Expense } from '../domain/expense.entity';
import { ExpenseRepository } from '../domain/expense.repository';

@Injectable()
export class FindExpenseUseCase {
  constructor(private readonly expenseRepository: ExpenseRepository) { }

  async execute(id: string): Promise<Expense> {
    const expense = await this.expenseRepository.findById(id);
    if (!expense) {
      throw new NotFoundException('Expense not found');
    }
    return expense;
  }
}
