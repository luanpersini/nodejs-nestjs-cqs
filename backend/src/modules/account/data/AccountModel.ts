import { DataTypes } from 'sequelize'
import { AllowNull, Column, Length, Model, Table } from 'sequelize-typescript'

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
