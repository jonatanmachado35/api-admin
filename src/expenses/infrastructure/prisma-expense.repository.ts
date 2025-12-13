import { Injectable } from '@nestjs/common';
import { Prisma, Expense as PrismaExpense } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { ExpenseRepository } from '../domain/expense.repository';
import { Expense, ExpenseStatus } from '../domain/expense.entity';

@Injectable()
export class PrismaExpenseRepository implements ExpenseRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(expense: Expense): Promise<Expense> {
    const created = await this.prisma.expense.create({
      data: {
        id: expense.id,
        name: expense.name,
        value: expense.value,
        status: expense.status,
        approved: expense.approved,
        created_at: expense.created_at,
      },
    });

    return this.toDomain(created);
  }

  async findById(id: string): Promise<Expense | null> {
    const expense = await this.prisma.expense.findUnique({ where: { id } });
    return expense ? this.toDomain(expense) : null;
  }

  async findAll(): Promise<Expense[]> {
    const expenses = await this.prisma.expense.findMany({
      orderBy: { created_at: 'desc' },
    });
    return expenses.map((expense) => this.toDomain(expense));
  }

  async update(id: string, data: Partial<Expense>): Promise<void> {
    await this.prisma.expense.update({
      where: { id },
      data,
    });
  }

  private toDomain(expense: PrismaExpense): Expense {
    const value = expense.value as unknown as Prisma.Decimal;
    const numericValue = value?.toNumber ? value.toNumber() : Number(expense.value);

    return new Expense({
      ...expense,
      value: numericValue,
      status: expense.status as ExpenseStatus,
    });
  }
}
