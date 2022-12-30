import { ICommand } from '@nestjs/cqrs'
import { AccountOperationDto } from '../dtos/AccountOperationDto'

export class WithdrawCommand implements ICommand {
  constructor(readonly operation: AccountOperationDto) {}
}
