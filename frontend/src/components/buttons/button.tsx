import { ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | undefined
  link?: string 
}

export const StyledButton = styled.button`
  :not(:first-child) {
    margin-left: 5px;
  }
`
export function Button(props: Props) {
  const InnerButton = (props: Props) => {
    const { label, className } = props
    return (     
        <StyledButton {...props} disabled={false} data-cy={label?.toLowerCase()} className={className}>
          {label}
        </StyledButton>    
    )
  }

  if (props.link) {
    return (
      <Link to={props.link} title={props.label}>
        <InnerButton {...props} />
      </Link>
    )
  } else {
    return <InnerButton {...props} />
  }
}

Button.defaultProps = {
  className: 'btn btn-primary'
}
