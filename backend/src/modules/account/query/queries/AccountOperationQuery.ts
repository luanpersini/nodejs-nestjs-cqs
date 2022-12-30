import { Injectable } from '@nestjs/common'
import { AccountModel } from '../../data/AccountModel'
import { AccountOperationModel } from '../../data/AccountOperationModel'
import { ListAccountOperationsResult } from '../application/ListAccountOperationsResult'
import { IAccountOperationQuery } from './IAccountOperationQuery'
// TODO replace any
@Injectable()
export class AccountOperationQuery implements IAccountOperationQuery {
  async listAccountOperations(accountId: string): Promise<any[]> {
    const result = await AccountOperationModel.findAll({ where: { accountId } })    
    return result.map((operation) => ListAccountOperationsResult.Factory(operation))
  }
  // TODO move to AccountQuery
  async findAccountById(accountId: string): Promise<any> {
    return await AccountModel.findOne({ where: { id: accountId } })
  }
}
