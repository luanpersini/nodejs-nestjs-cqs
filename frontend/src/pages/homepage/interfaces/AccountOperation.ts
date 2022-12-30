export interface AccountOperation {  
  accountId?: string
  operationId: string
  sourceId: string 
  amount: string
}

export interface AccountOperationDto {  
  accountId?: string
  operationId: string
  sourceId: string 
  amount: string
  balance: string
  createdAt: Date
}