import { Sequelize } from 'sequelize-typescript'
import { sequelizeConfig } from './sequelize.config'

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(sequelizeConfig)
      await sequelize.sync()
      return sequelize
    }
  }
]
