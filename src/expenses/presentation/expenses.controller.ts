import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { CreateExpenseUseCase } from '../application/create-expense.use-case';
import { ApproveExpenseUseCase } from '../application/approve-expense.use-case';
import { PayExpenseUseCase } from '../application/pay-expense.use-case';
import { ListExpensesUseCase } from '../application/list-expenses.use-case';
import { FindExpenseUseCase } from '../application/find-expense.use-case';
import { CreateExpenseDto } from './dto/create-expense.dto';

@Controller('expenses')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class ExpensesController {
  constructor(
    private readonly createExpenseUseCase: CreateExpenseUseCase,
    private readonly approveExpenseUseCase: ApproveExpenseUseCase,
    private readonly payExpenseUseCase: PayExpenseUseCase,
    private readonly listExpensesUseCase: ListExpensesUseCase,
    private readonly findExpenseUseCase: FindExpenseUseCase,
  ) { }

  @Post()
  async create(@Body() body: CreateExpenseDto) {
    return this.createExpenseUseCase.execute(body);
  }

  @Get()
  async findAll() {
    return this.listExpensesUseCase.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.findExpenseUseCase.execute(id);
  }

  @Patch(':id/approve')
  async approve(@Param('id') id: string) {
    return this.approveExpenseUseCase.execute(id);
  }

  @Patch(':id/pay')
  async pay(@Param('id') id: string) {
    return this.payExpenseUseCase.execute(id);
  }
}
