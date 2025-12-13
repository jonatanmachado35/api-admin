import { Injectable, BadRequestException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Expense, ExpenseStatus } from '../domain/expense.entity';
import { ExpenseRepository } from '../domain/expense.repository';

@Injectable()
export class CreateExpenseUseCase {
  constructor(private readonly expenseRepository: ExpenseRepository) { }

  async execute(data: Partial<Expense>): Promise<Expense> {
    if (!data.name || data.value === undefined || data.value === null) {
      throw new BadRequestException('Missing required expense fields');
    }

    const expense = new Expense({
      id: uuidv4(),
      name: data.name,
      value: data.value,
      approved: false,
      status: ExpenseStatus.PENDING,
      created_at: new Date(),
    });

    return this.expenseRepository.create(expense);
  }
}
