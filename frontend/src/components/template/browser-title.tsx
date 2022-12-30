import { useEffect } from 'react'

interface Props {
  title: string
}

export function BrowserTitle({ title }: Props) {
  //Set browser title based on route parameters
  useEffect(() => { document.title = title }, [title])

  return (<></>)
}
