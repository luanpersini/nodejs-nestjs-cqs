import { Sequelize } from 'sequelize-typescript'
import { AccountModel } from 'src/modules/account/data/AccountModel'
import { AccountOperationModel } from 'src/modules/account/data/AccountOperationModel'

export const models = [AccountModel, AccountOperationModel]

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize('sqlite::memory:', {logging: false})
      sequelize.addModels([...models])
      
      await sequelize.sync()
      return sequelize
    }
  }
]