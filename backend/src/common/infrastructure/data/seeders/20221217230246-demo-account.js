'use strict'

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Accounts', [{
      id: '8ff48b93-66eb-46e3-ae47-7dac6606b68f',
      name: 'Somebody Someone',
      email: 'email@mail.com'
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Accounts', { id: '8ff48b93-66eb-46e3-ae47-7dac6606b68f' })
  }
}
