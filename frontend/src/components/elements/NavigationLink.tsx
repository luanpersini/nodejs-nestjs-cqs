import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'


const StyledLink = styled(Link)`
  background-color: inherit;
  color: inherit;
  text-decoration: inherit;
  border: inherit;
`
interface Props extends LinkProps { 
  class?: string
}

//This function replaces the "useNavigation" function and should be used moving forward
export function NavigationLink(props: Props) {
  return (   
      <StyledLink {...props} />    
  )
}
