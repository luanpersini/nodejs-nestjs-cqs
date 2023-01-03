import * as dotenv from 'dotenv'
import { Dialect } from 'sequelize'

dotenv.config()

export interface EnvConfig {
  nodeEnv: string
  port: number
  databaseConfig: DatabaseConfig
}

export interface DatabaseConfig {
  host: string
  port: number  
  database: string
  dialect: Dialect
}
const envConfig: EnvConfig = {
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT),  
  databaseConfig: {
    dialect: <Dialect>process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME  
  }
}

export default envConfig
