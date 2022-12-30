import { Spinner } from 'src/components/elements/Spinner'
import { NoEntriesFound } from './NoEntriesFound'

type Props = {
  children: React.ReactNode
  data: unknown[]
  isLoading: boolean
  emptyMessage?: string
}

export function ListWrapper({ children, data, isLoading, emptyMessage }: Props) {
  if (isLoading) {
    return <Spinner />
  }

  if (data.length === 0) {
    return <NoEntriesFound message={emptyMessage} />
  }

  return <div className="align-items-center">{children}</div>
}
