import { BadRequestException, Inject } from '@nestjs/common'
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { ErrorMessages } from '../../domain/ErrorMessages'
import { InjectionList } from '../../InjectionList'
import { IAccountOperationQuery } from '../queries/IAccountOperationQuery'
import { GetAccountBalanceQuery } from './GetAccountBalanceQuery'
import { GetAccountBalanceResult } from './GetAccountBalanceResult'

@QueryHandler(GetAccountBalanceQuery)
export class GetAccountBalanceQueryHandler implements IQueryHandler<GetAccountBalanceQuery, GetAccountBalanceResult> {
  @Inject(InjectionList.ACCOUNT_OPERATION_QUERY)
  readonly accountOperationQuery: IAccountOperationQuery

  async execute(query: GetAccountBalanceQuery): Promise<GetAccountBalanceResult> {
    const accountExists = await this.accountOperationQuery.findAccountById(query.accountId)
    if (!accountExists) {
      throw new BadRequestException(ErrorMessages.INVALID_ACCOUNT)
    }  
    return GetAccountBalanceResult.Factory(await this.accountOperationQuery.getAccountBalance(query.accountId))
  }
}
