import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { DepositedEvent } from './DepositedEvent'

@EventsHandler(DepositedEvent)
export class DepositedEventHandler implements IEventHandler<DepositedEvent> {
  async handle(event: DepositedEvent): Promise<void> {
    const seconds = 4
    await console.log(`Step 6: The event handlers observing the fired event will execute their logic.
    > This happens asynchronously and dosent return any value to the interface. 
    > Waiting: ${seconds} seconds.`)
    await new Promise((resolve) => setTimeout(resolve, seconds * 1000))
    console.log(`Hello costumer! You received a deposit of ${event.amount} on account ${event.accountId}`)
    console.log('Step 7: Operation completed. Async code executed.')
  }
}
