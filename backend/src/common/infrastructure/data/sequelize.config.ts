import envConfig from '@config/EnvConfig'
import { SequelizeModuleOptions } from '@nestjs/sequelize'

const { databaseConfig } = envConfig

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: databaseConfig.dialect,
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
  autoLoadModels: true,
  logging: false,
  synchronize: false,
  define: {
    timestamps: false
  }
}
