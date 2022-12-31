import { DataTypes } from 'sequelize'
import { AllowNull, Column, Length, Model, Table } from 'sequelize-typescript'

export const fixedAccountId = '8ff48b93-66eb-46e3-ae47-7dac6606b68f'

export const mockedAccount = {
  id: fixedAccountId,
  name: 'Somebody Someone',
  email: 'email@mail.com'
}

export type AccountParams = typeof mockedAccount
@Table({
  tableName: 'Accounts'
})
export class AccountModel extends Model {
  @Column({
    primaryKey: true,
    type: DataTypes.UUID,
    autoIncrement: false
  })
  id: string

  @Length({ min: 3, max: 200 })
  @AllowNull(false)
  @Column
  name: string

  @Length({ min: 3, max: 250 })
  @AllowNull(false)
  @Column
  email: string
}
