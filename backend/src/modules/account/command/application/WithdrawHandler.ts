import { Inject } from '@nestjs/common'
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs'
import { OperationNamesList } from '../../data/OperationsList'
import { AccountOperation } from '../../domain/AccountOperation'
import { InjectionList } from '../../InjectionList'
import { VerifyOperationHelper } from '../helpers/VerifyOperationHelper'
import { AccountOperationRepository } from '../repositories/AccountOperationRepository'
import { WithdrawCommand } from './WithdrawCommand'

@CommandHandler(WithdrawCommand)
export class WithdrawHandler implements ICommandHandler<WithdrawCommand, void> {
  constructor(
    private publisher: EventPublisher,
    @Inject(InjectionList.ACCOUNT_OPERATION_REPOSITORY)
    private accountOperationRepository: AccountOperationRepository
  ) {}

  async execute({ operation }: WithdrawCommand): Promise<void> {
    
    VerifyOperationHelper.checkOperationId(operation.operationId, OperationNamesList.WITHDRAW)
    VerifyOperationHelper.checkIfAccountExists(await this.accountOperationRepository.findAccountById(operation.accountId)) 
    
    const balance = await this.accountOperationRepository.getAccountBalance(operation.accountId)
    const accountOperation = this.publisher.mergeObjectContext(new AccountOperation({ ...operation, balance }))
    
    accountOperation.withdraw()
    await this.accountOperationRepository.saveAccountOperation(accountOperation)
    accountOperation.commit()
  }
}

/*
{
  "accountId": "8ff48b93-66eb-46e3-ae47-7dac6606b68f",
  "operationId": "0b9fbde9-31dd-472d-b1af-b27278e15648",
  "sourceId": "c0ce9f97-2931-415f-b6af-06dbbe3254dc",
  "amount": "100.00"
}
*/