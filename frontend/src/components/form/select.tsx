/* eslint-disable @typescript-eslint/ban-types */

import React, { SelectHTMLAttributes } from 'react'
import { keyValueMapper } from 'src/common/utils/KeyValueMapper'

import { ErrorMessage } from './error-message'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label?: string | undefined
  errors?: any[]
  selectoptions: unknown[]
  selectkey:string,
  selectvalue: string,
  inputvalue?: any
}

//TODO refactor to receive information naming which field in a object is key and which is value
export function Select(props: Props) {
  const { name, errors, id, label, className, selectoptions, selectkey, selectvalue, inputvalue } = props

  const labelName = label === undefined ? name : label
  if (!selectoptions) return null

  const options = keyValueMapper(selectoptions, selectkey, selectvalue)
  return (
    <div className="form-group mb-3">
      <label className="form-label me-2" htmlFor={name}>
        {labelName}
      </label>
      <select
        {...props}
        name={name}
        data-cy={name}
        id={id === undefined ? name : id}
        className={className}
        value={inputvalue === undefined ? '' : inputvalue[name]}
      >
        <option value="" />
        {React.Children.toArray(
          options.map((option) => (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          ))
        )}
      </select>
      <ErrorMessage name={name} errors={errors} />
    </div>
  )
}
Select.defaultProps = {
  className: 'form-control',
  placeholder: undefined
}
