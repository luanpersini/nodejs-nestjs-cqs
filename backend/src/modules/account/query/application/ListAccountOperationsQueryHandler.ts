import { Inject } from '@nestjs/common'
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { VerifyOperationHelper } from '../../command/helpers/VerifyOperationHelper'
import { InjectionList } from '../../InjectionList'
import { IAccountOperationQuery } from '../queries/IAccountOperationQuery'
import { ListAccountOperationsQuery } from './ListAccountOperationsQuery'
import { ListAccountOperationsResult } from './ListAccountOperationsResult'

@QueryHandler(ListAccountOperationsQuery)
export class ListAccountOperationsQueryHandler implements IQueryHandler<ListAccountOperationsQuery, ListAccountOperationsResult[]> {
  @Inject(InjectionList.ACCOUNT_OPERATION_QUERY)
  readonly accountOperationQuery: IAccountOperationQuery

  async execute(query: ListAccountOperationsQuery): Promise<ListAccountOperationsResult[]> {
    VerifyOperationHelper.checkIfAccountExists(await this.accountOperationQuery.findAccountById(query.accountId)) 
      
    return ListAccountOperationsResult.Factory(await this.accountOperationQuery.listAccountOperations(query.accountId))
  }
}
