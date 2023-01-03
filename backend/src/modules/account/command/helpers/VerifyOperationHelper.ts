import { BadRequestException } from '@nestjs/common'
import { AccountParams } from '../../data/AccountModel'
import { OperationsList } from '../../data/OperationsList'
import { ErrorMessages } from '../../domain/ErrorMessages'

export const VerifyOperationHelper = {
  checkOperationId(operationId: string, operationName: string): void {
    
    if (operationId !== OperationsList.find((op) => op.name === operationName).id) {
      throw new BadRequestException(ErrorMessages.INVALID_OPERATION)
    }
  },
  checkIfAccountExists(account: AccountParams): void {    
    if (!account) {
      throw new BadRequestException(ErrorMessages.INVALID_ACCOUNT)
    } 
  },
}