import { useFetch } from 'src/common/adapters/ReactQueryAdapter'
import apiPaths from 'src/common/paths/apiPaths'
import { formatCurrency } from 'src/common/utils/FormatCurrency'

export const useGetAccountBalance = (accountId: string) => {
  const useQuery = () => useFetch<{ balance: string }>(apiPaths.accountOperations.getBalance + accountId)

  const query = useQuery()

  const showBalance = () => {
    if (query.data) {
      return formatCurrency.toLocaleCurrency(query.data.balance, 'en-us', 'USD')
    }
    return undefined
  }

  return { showBalance, query }
}
