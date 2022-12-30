import { IQueryResult } from '@nestjs/cqrs'

export class GetAccountBalanceResult implements IQueryResult {
  readonly balance: number

  static Factory(balance: number): GetAccountBalanceResult {
    return {
      balance: balance,      
    }
  }
}
