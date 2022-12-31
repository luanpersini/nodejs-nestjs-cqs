import { IQueryResult } from '@nestjs/cqrs'
import { AccountOperationModel } from '../../data/AccountOperationModel'
import { OperationsList, OperationTypes } from '../../data/OperationsList'
import { SourcesList } from '../../data/SourcesList'

export class ListAccountOperationsResult implements IQueryResult {
  readonly id: string
  readonly operation: string
  readonly source: string
  readonly amount: number
  readonly createdAt: Date
  readonly type: OperationTypes

  static Factory(accountOperations: AccountOperationModel[]): ListAccountOperationsResult[] {
    return accountOperations.map((accountOperation) => ({
      id: accountOperation.id,
      operation: OperationsList.find((op) => op.id === accountOperation.operationId).name,
      source: SourcesList.find((source) => source.id === accountOperation.sourceId).name,
      amount: accountOperation.amount,
      createdAt: accountOperation.createdAt,
      type: OperationsList.find((op) => op.id === accountOperation.operationId).type
    }))
  }
}
