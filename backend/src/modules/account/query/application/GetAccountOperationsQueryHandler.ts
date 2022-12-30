import { BadRequestException, Inject } from '@nestjs/common'
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { InjectionList } from '../../InjectionList'
import { ErrorMessages } from '../../domain/ErrorMessages'
import { IAccountOperationQuery } from '../queries/IAccountOperationQuery'
import { ListAccountOperationsQuery } from './ListAccountOperationsQuery'

// TODO replace both 'any' for the result interface
@QueryHandler(ListAccountOperationsQuery)
export class ListAccountOperationsQueryHandler implements IQueryHandler<ListAccountOperationsQuery, any> {
  @Inject(InjectionList.ACCOUNT_OPERATION_QUERY)
  readonly accountOperationQuery: IAccountOperationQuery

  async execute(query: ListAccountOperationsQuery): Promise<any> {
    const accountExists = await this.accountOperationQuery.findAccountById(query.accountId)
    if (!accountExists) {
      throw new BadRequestException(ErrorMessages.INVALID_ACCOUNT)
    }
    const data = await this.accountOperationQuery.listAccountOperations(query.accountId)
    return data
  }
}
