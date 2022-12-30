export interface IAccountOperationQuery { 
  listAccountOperations(accountId: string): Promise<any[]>
  findAccountById(accountId: string): Promise<any>
}
