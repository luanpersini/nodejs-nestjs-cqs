'use strict'

const tableName = 'AccountOperations'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(tableName, {
        id: {
          primaryKey: true,
          type: Sequelize.UUID
        },
        accountId: {
          type: Sequelize.UUID,
          allowNull: false
        },
        operationId: {
          type: Sequelize.UUID,
          allowNull: false
        },
        sourceId: {
          type: Sequelize.UUID,
          allowNull: false
        },
        amount: {
          type: Sequelize.DECIMAL(12, 2),
          allowNull: false
        },
        balance: {
          type: Sequelize.DECIMAL(12, 2),
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
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