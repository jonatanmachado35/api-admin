import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ExpensesController } from './presentation/expenses.controller';
import { CreateExpenseUseCase } from './application/create-expense.use-case';
import { ApproveExpenseUseCase } from './application/approve-expense.use-case';
import { PayExpenseUseCase } from './application/pay-expense.use-case';
import { ListExpensesUseCase } from './application/list-expenses.use-case';
import { FindExpenseUseCase } from './application/find-expense.use-case';
import { ExpenseRepository } from './domain/expense.repository';
import { PrismaExpenseRepository } from './infrastructure/prisma-expense.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ExpensesController],
  providers: [
    CreateExpenseUseCase,
    ApproveExpenseUseCase,
    PayExpenseUseCase,
    ListExpensesUseCase,
    FindExpenseUseCase,
    {
      provide: ExpenseRepository,
      useClass: PrismaExpenseRepository,
    },
  ],
  exports: [ExpenseRepository],
})
export class ExpensesModule { }
