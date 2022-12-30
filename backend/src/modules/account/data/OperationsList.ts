export enum OperationTypes {
  credit = 0,
  debit = 1
}

export type Operation = {
  id?: string
  name: string
  type: OperationTypes
}

export enum OperationNamesList {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw'
}

export const OperationsList: Operation[] = [
  {
    id: '62d8fce2-49d2-47e5-a23a-9ef7a4bc42de',
    name: OperationNamesList.DEPOSIT,
    type: OperationTypes.credit
  },
  {
    id: '0b9fbde9-31dd-472d-b1af-b27278e15648',
    name: OperationNamesList.WITHDRAW,
    type: OperationTypes.debit
  }
]
