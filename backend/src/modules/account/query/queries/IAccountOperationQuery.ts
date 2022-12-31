import { AccountParams } from '../../data/AccountModel'
import { ListAccountOperationsResult } from '../application/ListAccountOperationsResult'

export interface IAccountOperationQuery { 
  listAccountOperations(accountId: string): Promise<ListAccountOperationsResult[]>
  findAccountById(accountId: string): Promise<AccountParams>
  getAccountBalance(accountId: string): Promise<number>
}
