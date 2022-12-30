/* eslint-disable @typescript-eslint/ban-types */

import { InputHTMLAttributes } from 'react';
import Form from 'react-bootstrap/esm/Form';
import { ErrorMessage } from './error-message';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string | undefined
  errors?: any[]    
  inputvalue?: any
}
// inputvalues?: any | undefined
export function Input(props: Props) {
  const { name, errors, id, label, type, className, placeholder, inputvalue } = props  
  
  const labelName = label === undefined ? name : label 
  
  return (   
      <Form.Group className="mb-3" controlId={"formGroup" + name}>    
      <Form.Label>{labelName}</Form.Label>
      
      <input
        {...props}
        name={name}
        data-cy={name}
        type={type}
        value={inputvalue === undefined ? '' : inputvalue[name]}
        id={id === undefined ? name : id}
        placeholder={placeholder === undefined ? `Enter ${labelName}...` : placeholder}
        className={className}
      />
      
     <ErrorMessage name={name} errors={errors}/>
     </Form.Group>
  )
}
Input.defaultProps = {
  type: 'text',
  className: 'form-control',
  placeholder: undefined
}