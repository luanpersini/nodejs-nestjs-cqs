import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { DepositedEvent } from './DepositedEvent'
import { WithdrawnEvent } from './WithdrawnEvent'

@EventsHandler(WithdrawnEvent)
export class WithdrawnEventHandler implements IEventHandler<WithdrawnEvent> {
  async handle(event: DepositedEvent): Promise<void> {    
    console.log(`This message is asynchronous`)
    console.log(`Hello costumer! You made a withdrawn of ${event.amount} on account ${event.accountId}`)
  }
}
