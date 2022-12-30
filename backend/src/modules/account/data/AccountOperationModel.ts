import { DataTypes } from 'sequelize'
import { Column, Model, Table } from 'sequelize-typescript'

@Table({
  tableName: 'AccountOperations'
})
export class AccountOperationModel extends Model {
  @Column({
    primaryKey: true,
    type: DataTypes.UUID
  })
  id: string

  @Column({
    type: DataTypes.UUID,
    allowNull: false
  })
  accountId: string

  @Column({
    type: DataTypes.UUID,
    allowNull: false
  })
  operationId: string

  @Column({
    type: DataTypes.UUID,
    allowNull: false
  })
  sourceId: string

  @Column({
    type: DataTypes.DECIMAL({ decimals: 2 }),
    allowNull: false
  })
  amount: number

  @Column({
    type: DataTypes.DECIMAL({ decimals: 2 }),
    allowNull: false
  })
  balance: number

  @Column({
    type: DataTypes.DATE,
    allowNull: false
  })
  createdAt?: Date
}
