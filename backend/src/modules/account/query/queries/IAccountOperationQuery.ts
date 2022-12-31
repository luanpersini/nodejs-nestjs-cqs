import { AccountParams } from '../../data/AccountModel'
import { AccountOperationModel } from '../../data/AccountOperationModel'

export interface IAccountOperationQuery { 
  listAccountOperations(accountId: string): Promise<AccountOperationModel[]>
  findAccountById(accountId: string): Promise<AccountParams>
  getAccountBalance(accountId: string): Promise<number>
}
