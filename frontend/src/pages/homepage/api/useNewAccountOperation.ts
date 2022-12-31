import { toast } from 'react-toastify'
import { usePost } from 'src/common/adapters/ReactQueryAdapter'
import apiPaths from 'src/common/paths/apiPaths'
import { AccountOperation } from '../interfaces/AccountOperation'

export const useNewAccountOperation = (operationName: string) => {
  const useQuery = (data: AccountOperation | undefined) =>
    usePost<AccountOperation, AccountOperation>(apiPaths.accountOperations.baseUrl + operationName, { ...data })

  const mutation = useQuery(undefined)

  const newAccountOperation = async (data: AccountOperation) => {
    return await mutation.mutateAsync(data).catch(e =>  toast.error(e?.message))           
  }

  return { newAccountOperation }
}