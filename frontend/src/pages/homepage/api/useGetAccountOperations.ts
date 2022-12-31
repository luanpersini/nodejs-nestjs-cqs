import { useFetch } from 'src/common/adapters/ReactQueryAdapter'
import apiPaths from 'src/common/paths/apiPaths'
import { formatCurrency } from 'src/common/utils/FormatCurrency'
import { formatDate } from 'src/common/utils/FormatDate'
import { AccountOperation, AccountOperationDto } from '../interfaces/AccountOperation'

export const useGetAccountOperation = (id: string) => useFetch<AccountOperation>(apiPaths.accountOperations.baseUrl + id)

export const useGetAccountOperationsList = (accountId: string) => {
  const useQuery = () => useFetch<AccountOperationDto[]>(apiPaths.accountOperations.getAccountOperations + accountId)

  const query = useQuery()

  const listAccountOperations = () => {
    if (query.data) {
      const data = query.data.map((operation) => ({
        ...operation,
        amount: formatCurrency.toLocaleCurrency(operation.amount, 'en-us', 'USD'),
        createdAt: formatDate.toLocaleDate(operation.createdAt)
      }))
      return data
    }    
    return []
  }

  return { listAccountOperations, query }
}
