import { BadRequestException, Inject } from '@nestjs/common'
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { ErrorMessages } from '../../domain/ErrorMessages'
import { InjectionList } from '../../InjectionList'
import { IAccountOperationQuery } from '../queries/IAccountOperationQuery'
import { ListAccountOperationsQuery } from './ListAccountOperationsQuery'
import { ListAccountOperationsResult } from './ListAccountOperationsResult'

@QueryHandler(ListAccountOperationsQuery)
export class ListAccountOperationsQueryHandler implements IQueryHandler<ListAccountOperationsQuery, ListAccountOperationsResult[]> {
  @Inject(InjectionList.ACCOUNT_OPERATION_QUERY)
  readonly accountOperationQuery: IAccountOperationQuery

  async execute(query: ListAccountOperationsQuery): Promise<ListAccountOperationsResult[]> {
    const accountExists = await this.accountOperationQuery.findAccountById(query.accountId)
    if (!accountExists) {
      throw new BadRequestException(ErrorMessages.INVALID_ACCOUNT)
    }
    return await this.accountOperationQuery.listAccountOperations(query.accountId)
  }
}
