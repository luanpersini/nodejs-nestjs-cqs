# Migrations

## Create new migration

1. Run **npx sequelize-cli migration:create --name migration-name**
1. Add the **migrations-path** on **.sequelizerc**
1. Add your code to the migration file

## Update database

1. **Locally**:  **npx sequelize-cli db:migrate**
1. **Heroku**:  **heroku run sequelize db:migrate -a <instance-name>**
1. The migration name will be added in table **SequelizeMeta**

## Undoing migration

1. Run **npx sequelize-cli db:migrate:undo**
1. The migration will be removed from **SequelizeMeta**
1. Delete the migration file on the migrations folder


## Seeds

- **Run**: ``npx sequelize-cli db:seed:all``
- **Undo**: ``npx sequelize-cli db:seed:undo``



```Javascript
'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      //your code here
    });
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      //your code here
    });
  }
};
```

[<<BACK](../README.md)
