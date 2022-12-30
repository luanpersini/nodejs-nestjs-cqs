import { Inject } from '@nestjs/common'
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs'
import { AccountOperation } from '../../domain/AccountOperation'
import { InjectionList } from '../../InjectionList'
import { AccountOperationRepository } from '../repositories/AccountOperationRepository'
import { WithdrawCommand } from './WithdrawCommand'

//Transaction should be used in a real case scenario. This wont be done because its not in the scope of the training (Command/Query)
@CommandHandler(WithdrawCommand)
export class WithdrawHandler implements ICommandHandler<WithdrawCommand, void> {
  constructor(
    private publisher: EventPublisher,
    @Inject(InjectionList.ACCOUNT_OPERATION_REPOSITORY)
    private accountOperationRepository: AccountOperationRepository
  ) {}

  async execute({ operation }: WithdrawCommand): Promise<void> {
    const balance = await this.accountOperationRepository.getAccountBalance(operation.accountId)
    const accountOperation = this.publisher.mergeObjectContext(new AccountOperation({ ...operation, balance }))
    
    accountOperation.withdraw()
    await this.accountOperationRepository.saveAccountOperation(accountOperation)
    accountOperation.commit()
  }
}
