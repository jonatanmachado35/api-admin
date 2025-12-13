import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { ExpenseStatus, Expense } from '../domain/expense.entity';
import { ExpenseRepository } from '../domain/expense.repository';

@Injectable()
export class ApproveExpenseUseCase {
  constructor(private readonly expenseRepository: ExpenseRepository) { }

  async execute(id: string): Promise<Expense> {
    const expense = await this.expenseRepository.findById(id);
    if (!expense) {
      throw new NotFoundException('Expense not found');
    }

    if (expense.status === ExpenseStatus.PAID) {
      throw new BadRequestException('Expense already paid');
    }

    const updatedExpense = new Expense({
      ...expense,
      approved: true,
      status: ExpenseStatus.AWAITING_PAYMENT,
    });

    await this.expenseRepository.update(id, {
      approved: updatedExpense.approved,
      status: updatedExpense.status,
    });

    return updatedExpense;
  }
}
