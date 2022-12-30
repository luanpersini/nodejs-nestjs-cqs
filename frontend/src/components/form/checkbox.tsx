/* eslint-disable @typescript-eslint/ban-types */

import { InputHTMLAttributes } from 'react'
import Form from 'react-bootstrap/esm/Form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string | undefined
  inputvalue?: any
}
export function Checkbox(props: Props) {
  const { name, id, label, value } = props

  const labelName = label === undefined ? name : label
  return (
    <Form.Group className="mb-3" controlId={'formGroup' + name}>
      <input title={label} type="checkbox" name={name} value={value} id={!id ? name : id} />
      &nbsp;
      <Form.Label for={name}>{labelName}</Form.Label>
    </Form.Group>
  )
}

Checkbox.defaultProps = {
  type: 'text',
  placeholder: undefined
}
