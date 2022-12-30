import { IQuery } from '@nestjs/cqrs';

export class ListAccountOperationsQuery implements IQuery {
  constructor(readonly accountId: string) {}
}