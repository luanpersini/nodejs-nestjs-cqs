import { AccountOperation } from '../../domain/AccountOperation'

export interface IAccountOperationRepository {
  saveAccountOperation(accountOperation: AccountOperation): Promise<void>
  getAccountBalance(accountId: string): Promise<number>
}
