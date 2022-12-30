'use strict'

const tableName = 'Accounts'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(tableName, {
        id: {
          primaryKey: true,
          type: Sequelize.UUID
        },
        name: {
          type: Sequelize.STRING,
          length: 255,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          length: 255,
          allowNull: false
        }
      })
    })
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable(tableName)
    })
  }
}