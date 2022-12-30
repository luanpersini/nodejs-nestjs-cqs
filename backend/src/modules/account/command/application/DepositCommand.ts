import { ICommand } from '@nestjs/cqrs'
import { AccountOperationDto } from '../dtos/AccountOperationDto'

export class DepositCommand implements ICommand {
  constructor(readonly operation: AccountOperationDto) {}
}
