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
  username: string
  password: string
  database: string
  dialect: Dialect
  requireSsl: boolean
}
const envConfig: EnvConfig = {
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT),  
  databaseConfig: {
    dialect: <Dialect>process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_NAME : process.env.DATABASE_NAME,
    requireSsl: process.env.DATABASE_REQUIRE_SSL?.toLocaleLowerCase() === 'true' ? true : false
  }
}

export default envConfig
