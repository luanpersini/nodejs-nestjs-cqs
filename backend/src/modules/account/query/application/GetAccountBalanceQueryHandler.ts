import { Inject } from '@nestjs/common'
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { VerifyOperationHelper } from '../../command/helpers/VerifyOperationHelper'
import { InjectionList } from '../../InjectionList'
import { IAccountOperationQuery } from '../queries/IAccountOperationQuery'
import { GetAccountBalanceQuery } from './GetAccountBalanceQuery'
import { GetAccountBalanceResult } from './GetAccountBalanceResult'

@QueryHandler(GetAccountBalanceQuery)
export class GetAccountBalanceQueryHandler implements IQueryHandler<GetAccountBalanceQuery, GetAccountBalanceResult> {
  @Inject(InjectionList.ACCOUNT_OPERATION_QUERY)
  readonly accountOperationQuery: IAccountOperationQuery

  async execute(query: GetAccountBalanceQuery): Promise<GetAccountBalanceResult> {    
    VerifyOperationHelper.checkIfAccountExists(await this.accountOperationQuery.findAccountById(query.accountId)) 
    
    return GetAccountBalanceResult.Factory(await this.accountOperationQuery.getAccountBalance(query.accountId))
  }
}
