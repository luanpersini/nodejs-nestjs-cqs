import validate from '../validation/YupAdapter'

export async function handleChangeFormValidation(input: any, errors: any, validationSchema: any) {
  const errorsFound = await validateForm(input, errors, validationSchema)
  return { errorsFound }
}

async function validateForm(input: any, errors: any, validationSchema: any) {
  const { name, value } = input
  const errorsFound = { ...errors }
  const errorMessage = await validate.One(name, value, validationSchema)

  if (errorMessage) {
    errorsFound[name] = errorMessage
  } else delete errorsFound[name]

  return errorsFound
}
