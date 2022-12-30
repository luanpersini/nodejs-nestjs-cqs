import { AccountOperation } from './interfaces/AccountOperation'

type OperationsListKeys = {
  deposit: string
  withdraw: string
}

export type Operation = {
  id: string
  name: string
}

type OperationsList<T> = {
  [Property in keyof T]: Operation
}

export const OperationsList: OperationsList<OperationsListKeys> = {
  deposit: {
    id: '62d8fce2-49d2-47e5-a23a-9ef7a4bc42de',
    name: 'deposit'
  },
  withdraw: {
    id: '0b9fbde9-31dd-472d-b1af-b27278e15648',
    name: 'withdraw'
  }
}

export type Source = {
  [key: string]: {
    id: string
    name: string
  }
}

export const SourcesList: Source = {
  terminal: {
    id: 'c0ce9f97-2931-415f-b6af-06dbbe3254dc',
    name: 'Boulevard Shopping Terminal'
  }
}

export const accountId = '8ff48b93-66eb-46e3-ae47-7dac6606b68f'

export const makeAccountOperation = (params: AccountOperation) => ({
  accountId,
  operationId: params.operationId,
  sourceId: params.sourceId,
  amount: params.amount
})
