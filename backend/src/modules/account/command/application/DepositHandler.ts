import { Inject } from '@nestjs/common'
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs'
import { OperationNamesList } from '../../data/OperationsList'
import { AccountOperation } from '../../domain/AccountOperation'
import { InjectionList } from '../../InjectionList'
import { VerifyOperationHelper } from '../helpers/VerifyOperationHelper'
import { AccountOperationRepository } from '../repositories/AccountOperationRepository'
import { DepositCommand } from './DepositCommand'

@CommandHandler(DepositCommand)
export class DepositHandler implements ICommandHandler<DepositCommand, void> {
  constructor(
    private publisher: EventPublisher,
    @Inject(InjectionList.ACCOUNT_OPERATION_REPOSITORY)
    private accountOperationRepository: AccountOperationRepository
  ) {}

  async execute({ operation }: DepositCommand): Promise<void> {
    console.log('Step 2: The Deposit handler that subscribed to the (Deposit Command) starts its execution.')

    VerifyOperationHelper.checkOperationId(operation.operationId, OperationNamesList.DEPOSIT)
    VerifyOperationHelper.checkIfAccountExists(await this.accountOperationRepository.findAccountById(operation.accountId))

    const balance = await this.accountOperationRepository.getAccountBalance(operation.accountId)
    const accountOperation = this.publisher.mergeObjectContext(new AccountOperation({ ...operation, balance }))

    accountOperation.deposit()
    await this.accountOperationRepository.saveAccountOperation(accountOperation)

    console.log('Step 4: aggregate root is saved using a repository.')
    console.log('Step 5: the aggregate root is commited and the event is fired. The controller will now return its response.')
    accountOperation.commit()
  }
}

//Transaction should be used in a real case scenario.
/*
{
  "accountId": "8ff48b93-66eb-46e3-ae47-7dac6606b68f",
  "operationId": "62d8fce2-49d2-47e5-a23a-9ef7a4bc42de",
  "sourceId": "c0ce9f97-2931-415f-b6af-06dbbe3254dc",
  "amount": "100.00"
}
*/
