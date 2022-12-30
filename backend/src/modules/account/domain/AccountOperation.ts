import { UnprocessableEntityException } from '@nestjs/common'
import { AggregateRoot } from '@nestjs/cqrs'
import { v4 as uuidv4 } from 'uuid'
import { DepositedEvent } from '../command/events/DepositedEvent'
import { WithdrawnEvent } from '../command/events/WithdrawnEvent'
import { ErrorMessages } from './ErrorMessages'

interface IAccountOperation {
  deposit: (amount: number) => void
  withdraw: (amount: number, balance: number) => void
  commit: () => void
}

export type AccountOperationProperties = {
  id?: string
  accountId: string
  operationId: string
  sourceId: string
  amount: number
  balance: number
  createdAt?: Date
}

export class AccountOperation extends AggregateRoot implements IAccountOperation {
  readonly id: string
  readonly accountId: string
  readonly operationId: string
  readonly sourceId: string
  readonly amount: number
  balance: number
  readonly createdAt: Date

  constructor(properties: AccountOperationProperties) {
    super()
    Object.assign(this, properties)
    this.id = uuidv4()
    this.createdAt = new Date()
  }
  creditBalance(amount: number) {
    if (this.amount < 0.01) {
      throw new UnprocessableEntityException(ErrorMessages.CAN_NOT_OPERATE_UNDER_1_CENT)
    }
    
    this.balance = Number(this.balance) + Number(amount)
  }

  debitBalance(amount: number) {
    if (this.amount < 0.01) {
      throw new UnprocessableEntityException(ErrorMessages.CAN_NOT_OPERATE_UNDER_1_CENT)
    }

    if (this.balance < this.amount) {
      throw new UnprocessableEntityException(ErrorMessages.REQUESTED_WITHDRAWAL_AMOUNT_EXCEEDS_YOUR_BALANCE)
    }

    this.balance = Number(this.balance) - Number(amount)
  }

  deposit(): void {
    console.log('Step 3: The aggregate root executes its logic and define the Event that will be fired when its commited.')
    this.creditBalance(this.amount)
    this.apply(new DepositedEvent(this.id, this.amount))
  }

  withdraw(): void {
    this.debitBalance(this.amount)
    this.apply(new WithdrawnEvent(this.accountId, this.amount))
  }
}
