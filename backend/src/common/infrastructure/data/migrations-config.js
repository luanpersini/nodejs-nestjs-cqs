//This file contains the database settings for Sequelize migrations
//the db settings are being pulled from environment variables rather than EnvConfig

/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

const connectionData =  {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_NAME : process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
  logging: true
}

module.exports = {
  local:  connectionData,
  test:  connectionData,
  development: {
    ...connectionData,
    dialectOptions: { ssl: { rejectUnauthorized: false } }
  },
  production: {
    ...connectionData,
    dialectOptions: { ssl: { rejectUnauthorized: false } },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
}