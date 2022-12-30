import React from 'react'
import { useNavigate } from 'react-router-dom'
import validate from 'src/common/validation/YupAdapter'
import { FormEventFnc, FormEventInput, FormEventSelect } from 'src/react'

export const useFormHandler = <T>(validationSchema: Record<string, unknown>, initialData?: T | undefined) => {
  const navigate = useNavigate()

  // TODO - study if can be implemented using zustand or atomic tool
  const [errors, setErrors] = React.useState<string[]>([])
  const [data, setData] = React.useState<any | undefined>(initialData)
  const [submitErrors, setSubmitErrors] = React.useState<string | undefined>(undefined)

  const handleChange = React.useCallback(async (evt: FormEventFnc | FormEventInput | FormEventSelect, data: any) => {
    const { name, value } = evt.currentTarget
    data[name] = value //used to change data before re-render

    const errorsFound = await validateOne(evt, errors, validationSchema)
    setErrors(errorsFound)
  }, [])

  const handleSubmit = React.useCallback(
    async (evt: FormEventFnc | FormEventInput, data: T, submitFunction: any, successDestination: string, optimistic = false) => {
      evt.preventDefault()

      const errorsFound = await validate.Many(data, validationSchema)

      if (errorsFound) {
        errors[0] = errorsFound //used to check if there is error before re-render
        setErrors(errorsFound)
      } else {
        delete errors[0]
        setErrors([])
      }

      if (Object.keys(errors).length > 0) return

      try {
        if (optimistic) {
          submitFunction()
        } else {
          await submitFunction()
        }
        navigate(successDestination)
      } catch (error: any) {
        setSubmitErrors(error.message)
      }
    },
    []
  )

  return { errors, data, setData, handleChange, handleSubmit, submitErrors }
}

async function validateOne(
  evt: FormEventFnc | FormEventInput | FormEventSelect,
  errors: string[],
  validationSchema: Record<string, unknown>
) {
  const { name, value }: any = evt.currentTarget
  const errorsFound = { ...errors }
  const errorMessage = await validate.One(name, value, validationSchema)

  if (errorMessage) {
    errorsFound[name] = errorMessage
  } else delete errorsFound[name]

  return errorsFound
}
