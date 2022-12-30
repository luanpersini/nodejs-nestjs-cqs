export enum OperationTypes {
  credit = 0,
  debit = 1
}

export type Operation = {
  id?: string
  name: string
  type: OperationTypes
}

export const OperationsList: Operation[] = [
  {
    id: '62d8fce2-49d2-47e5-a23a-9ef7a4bc42de',
    name: 'deposit',
    type: OperationTypes.credit
  }
]
