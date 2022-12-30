import { AxiosError, AxiosResponse } from 'axios'
import { useMutation, useQuery, useQueryClient, UseQueryOptions } from 'react-query'
import { QueryFunctionContext } from 'react-query/types/core/types'
import { axiosClient } from './AxiosAdapter'

type QueryKeyT = [string, Record<string, unknown> | undefined]

// TODO - refactor this entire adapter

export const fetcher = async <T>({ queryKey, pageParam }: Omit<QueryFunctionContext<QueryKeyT>, 'meta'>): Promise<T> => {
  const [url, params] = queryKey
  return await axiosClient.get(url, { params: { ...params, pageParam } })
}

export const useFetch = <T>(url: string, params?: Record<string, unknown>, config?: UseQueryOptions<T, Error, T, QueryKeyT>) => {
  const context = useQuery<T, Error, T, QueryKeyT>([url!, params], ({ queryKey }) => fetcher({ queryKey }), {
    enabled: !!url,
    ...config
  })
  context.data = context.data ?? undefined
  return context
}

const useGenericMutation = <T, S>(
  func: (data: T | S) => Promise<AxiosResponse<S>>,
  url: string,
  params?: Record<string, unknown>,
  updater?: ((oldData: T, newData: S) => T) | undefined
) => {
  const queryClient = useQueryClient()

  return useMutation<AxiosResponse, AxiosError, T | S>(func, {
    onMutate: async (data) => {
      await queryClient.cancelQueries([url!, params])
      const previousData = queryClient.getQueryData([url!, params])

      queryClient.setQueryData<T>([url!, params], (oldData) => {
        return updater ? updater(oldData!, data as S) : (data as T)
      })

      return previousData
    },
    onError: (err, _, context) => {
      queryClient.setQueryData([url!, params], context)
    },
    onSettled: () => {
     queryClient.invalidateQueries([url!, params]) // Not Working - Look for a fix
     queryClient.invalidateQueries()      
    }
  })
}

export const useUpdate = <T, S>(url: string, params?: Record<string, unknown>, updater?: (oldData: T, newData: S) => T) => {
  return useGenericMutation<T, S>((data) => axiosClient.patch<S>(url, data), url, params, updater)
}

export const useDelete = <T>(url: string, params?: Record<string, unknown>, updater?: (oldData: T, id: string) => T) => {
  return useGenericMutation<T, string>((id) => axiosClient.delete(`${url}/${id}`), url, params, updater)
}

export const usePost = <T, S>(url: string, params?: Record<string, unknown>, updater?: (oldData: T, newData: S) => T) => {
  return useGenericMutation<T, S>((data) => axiosClient.post<S>(url, data), url, params, updater)
}