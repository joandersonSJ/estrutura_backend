const dotenv = require('dotenv');
dotenv.config()

module.exports = {
  "type": "postgres",
  "host": process.env.HOST || "localhost",
  "port": process.env.PORT_BANCO || 5432,
  "username": process.env.USER_BANCO || "root",
  "password": process.env.PASSWORD_BANCO || "root",
  "database": process.env.DATABASE_NAME || "banco",
  "migrationsTableName": "migrations_typeorm",
  "entities": [
    "src/app/models/**/*.ts"
  ],
  "migrations": [
    "src/database/migration/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/app/models",
    "migrationsDir": "src/database/migration",
  }
}
