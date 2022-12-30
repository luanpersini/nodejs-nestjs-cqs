import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { ApiTags } from '@nestjs/swagger'
import { DepositCommand } from './command/application/DepositCommand'
import { WithdrawCommand } from './command/application/WithdrawCommand'
import { AccountOperationDto } from './command/dtos/AccountOperationDto'
import { GetAccountBalanceQuery } from './query/application/GetAccountBalanceQuery'
import { ListAccountOperationsQuery } from './query/application/ListAccountOperationsQuery'
import { UuidDto } from './query/dtos/UuidDto'
@ApiTags('account')
@Controller('account')
export class AccountController {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Post('/deposit')
  async deposit(@Body() body: AccountOperationDto) {
    // This is a guided process. The withdraw process is clean.
    console.log('Command Flow')
    console.log('Step 1: Request received in the controller > controller calls the commandBus (new Deposit Command)')
    return await this.commandBus.execute(new DepositCommand(body))
  }

  @Post('/withdraw')
  async withdraw(@Body() body: AccountOperationDto): Promise<void> {
    return await this.commandBus.execute(new WithdrawCommand(body))
  }

  @Get('/balance/:id')
  async getAccountBalance(@Param() { id: accountId }: UuidDto): Promise<void> {
    return await this.queryBus.execute(new GetAccountBalanceQuery(accountId))
  }

  @Get('/operations/:id')
  async listAccountOperations(@Param() { id: accountId }: UuidDto): Promise<void> {
    return await this.queryBus.execute(new ListAccountOperationsQuery(accountId))
  }
}
