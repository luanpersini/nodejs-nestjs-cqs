import { Injectable } from '@nestjs/common'
import { AccountModel } from '../../data/AccountModel'
import { AccountOperationModel } from '../../data/AccountOperationModel'
import { ListAccountOperationsResult } from '../application/ListAccountOperationsResult'
import { IAccountOperationQuery } from './IAccountOperationQuery'
// TODO replace any
@Injectable()
export class AccountOperationQuery implements IAccountOperationQuery {
  async listAccountOperations(accountId: string): Promise<any[]> {
    const result = await AccountOperationModel.findAll({ where: { accountId }, order: [['createdAt', 'DESC']] })    
    return result.map((operation) => ListAccountOperationsResult.Factory(operation))
  }  

  // TODO move to AccountQuery
  async findAccountById(accountId: string): Promise<any> {
    return await AccountModel.findOne({ where: { id: accountId } })
  }

  async getAccountBalance(accountId: string): Promise<number> {
    const account = await AccountOperationModel.findOne({ where: { accountId: accountId }, order: [['createdAt', 'DESC']] })
    if (account?.balance) return Number(account.balance)
    return 0
  }
}
