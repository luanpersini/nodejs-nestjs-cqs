import { Injectable } from '@nestjs/common'
import { AccountParams, fixedAccountId, mockedAccount } from '../../data/AccountModel'
import { AccountOperationModel } from '../../data/AccountOperationModel'
import { IAccountOperationQuery } from './IAccountOperationQuery'
@Injectable()
export class AccountOperationQuery implements IAccountOperationQuery {
  async listAccountOperations(accountId: string): Promise<AccountOperationModel[]> {
    return await AccountOperationModel.findAll({ where: { accountId }, order: [['createdAt', 'DESC']] })
  }

  async findAccountById(accountId: string): Promise<AccountParams> {
    //fake database method
    if (fixedAccountId !== accountId) return null

    return mockedAccount
  }

  async getAccountBalance(accountId: string): Promise<number> {
    const account = await AccountOperationModel.findOne({ where: { accountId: accountId }, order: [['createdAt', 'DESC']] })
    if (account?.balance) return Number(account.balance)
    return 0
  }
}
