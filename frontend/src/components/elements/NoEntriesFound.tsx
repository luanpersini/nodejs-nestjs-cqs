import { ArchiveBoxIcon } from '@heroicons/react/24/outline'

type Props = {
  message?: string
}

export function NoEntriesFound({ message = 'No Entries Found.' }: Props) {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '20rem' }}>
      <div className="text-secondary">
        <ArchiveBoxIcon className="mx-auto" style={{ height: '4rem', display: 'block' }} />
        <h5>{message}</h5>
      </div>
    </div>
  )
}
