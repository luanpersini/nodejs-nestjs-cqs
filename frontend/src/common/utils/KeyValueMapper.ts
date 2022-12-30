import { IKeyValue } from 'src/interfaces/generics'

export const keyValueMapper = (data: unknown[], key: string, value: string): IKeyValue[] => {
  return data.map((item: any) => ({
    key: item[key] as string,
    value: item[value] as string
  }))
}