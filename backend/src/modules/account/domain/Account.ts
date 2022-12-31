import { AggregateRoot } from '@nestjs/cqrs'

interface IAccount {
  commit: () => void
}

type AccountProperties = {
  id: string
  name: string
  email: string
}

export class Account extends AggregateRoot implements IAccount {
  private readonly id: string
  readonly name: string
  readonly email: string

  constructor(properties: AccountProperties) {
    super()
    Object.assign(this, properties)
  }
}
