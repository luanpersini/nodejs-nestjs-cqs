import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { AccountController } from './AccountController'
import { DepositHandler } from './command/application/DepositHandler'
import { WithdrawHandler } from './command/application/WithdrawHandler'
import { DepositedEventHandler } from './command/events/DepositedEventHandler'
import { WithdrawnEventHandler } from './command/events/WithdrawnEventHandler'
import { AccountOperationRepository } from './command/repositories/AccountOperationRepository'
import { GetAccountBalanceQuery } from './query/application/GetAccountBalanceQuery'
import { GetAccountBalanceQueryHandler } from './query/application/GetAccountBalanceQueryHandler'
import { ListAccountOperationsQuery } from './query/application/ListAccountOperationsQuery'
import { ListAccountOperationsQueryHandler } from './query/application/ListAccountOperationsQueryHandler'
import { AccountOperationQuery } from './query/queries/AccountOperationQuery'

const deposit = [DepositHandler, DepositedEventHandler]
const withdraw = [WithdrawHandler, WithdrawnEventHandler]
const listAccountOperations = [ListAccountOperationsQuery, ListAccountOperationsQueryHandler]
const getAccountBalance = [GetAccountBalanceQuery, GetAccountBalanceQueryHandler]

const injection = [
  {
    provide: 'IAccountOperationRepository',
    useClass: AccountOperationRepository
  },
  {
    provide: 'IAccountOperationQuery',
    useClass: AccountOperationQuery
  }
]
@Module({
  imports: [CqrsModule],
  controllers: [AccountController],
  providers: [...deposit, ...withdraw, ...listAccountOperations, ...getAccountBalance, ...injection]
})
export class AccountModule {}
