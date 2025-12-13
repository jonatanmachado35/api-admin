import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Expense, ExpenseStatus } from '../domain/expense.entity';
import { ExpenseRepository } from '../domain/expense.repository';

@Injectable()
export class PayExpenseUseCase {
  constructor(private readonly expenseRepository: ExpenseRepository) { }

  async execute(id: string): Promise<Expense> {
    const expense = await this.expenseRepository.findById(id);
    if (!expense) {
      throw new NotFoundException('Expense not found');
    }

    if (!expense.approved) {
      throw new BadRequestException('Expense must be approved before payment');
    }

    if (expense.status === ExpenseStatus.PAID) {
      return expense;
    }

    const updatedExpense = new Expense({
      ...expense,
      status: ExpenseStatus.PAID,
    });

    await this.expenseRepository.update(id, {
      status: ExpenseStatus.PAID,
    });

    return updatedExpense;
  }
}
