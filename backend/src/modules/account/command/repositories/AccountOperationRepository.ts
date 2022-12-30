import { Injectable } from '@nestjs/common'
import { AccountOperationModel } from '../../data/AccountOperationModel'
import { AccountOperation } from '../../domain/AccountOperation'
import { IAccountOperationRepository } from './IAccountOperationRepository'

@Injectable()
export class AccountOperationRepository implements IAccountOperationRepository {
  async saveAccountOperation(accountOperation: AccountOperation): Promise<void> {
    await AccountOperationModel.create({ ...accountOperation })
  }

  async getAccountBalance(accountId: string): Promise<number> {
    const account = await AccountOperationModel.findOne({ where: { accountId: accountId }, order: [['createdAt', 'DESC']] })
    if (account?.balance) return Number(account.balance)
    return 0
  }
}
