
import styled from 'styled-components'

interface Props {
  title: string
}

export const StyledPageTitle = styled.h1`
  font-weight: bold;
  font-size: 25px;  
  margin-bottom: 30px;
  padding-bottom: 3px;   
`

export function PageTitle({ title, ...props }: Props) {
  return <StyledPageTitle {...props}>{title}</StyledPageTitle>
}
