import { IQuery } from '@nestjs/cqrs';

export class GetAccountBalanceQuery implements IQuery {
  constructor(readonly accountId: string) {}
}