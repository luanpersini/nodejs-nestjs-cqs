import { PropsWithChildren } from 'react'
import loading from 'src/assets/loading.svg'
import styled from 'styled-components'

type Props = {
  isLoading: boolean  
}

export const Spinner = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;  
  background-color: white;
`

export function Loading({ isLoading, children }: PropsWithChildren<Props>) {  
  return (
    <>
      {isLoading
          ?
          <Spinner>
            <img src={loading} alt="Loading" />
          </Spinner>
          : 
          children
      }
    </>)
}
