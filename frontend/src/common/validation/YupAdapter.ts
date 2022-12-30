import * as Yup from 'yup'

import { ValidateMany, ValidateOne } from './validate'

class YupAdapter implements ValidateOne, ValidateMany {
  async One(name: any, value: any, schema: any): Promise<any> {
    const objValue: any = value === null || value === '' ? undefined : value

    const obj = { [name]: objValue }
    const objSchema = Yup.object().shape({ [name]: schema[name] })
    return await objSchema
      .validate(obj)
      .then(function (value: any) {
        return undefined
      })
      .catch(function (err: any) {
        return err.message
        })
  }

  async Many(obj: any, schema: any): Promise<any> {
    let error: any = {}

    await Promise.all(
      Object.entries(obj).map(async (item: any) => {
        const key = item[0]
        const value = item[1]
        const data = { name: key, value: value }
        const errorMessage = await this.One(key, value, schema)
        if (errorMessage !== undefined) error[key] = errorMessage
      })
    )
    if (Object.entries(error).length === 0) error = undefined

    return error
  }
}

export default new YupAdapter()