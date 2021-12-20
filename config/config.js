require("dotenv").config()

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DATABASE_URL } = process.env

const DB_USERNAME_PROD = DATABASE_URL.split("//")[1].split(":")[0]
const DB_PASSWORD_PROD = DATABASE_URL.split("//")[1].split(":")[1].split("@")[0]
const DB_DATABASE_PROD = DATABASE_URL.split("//")[1].split("@")[1].split("/")[1]
const DB_HOST_PROD = DATABASE_URL.split("//")[1]
  .split("@")[1]
  .split("/")[0]
  .split(":")[0]

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "database_development",
    host: DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "database_test",
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME_PROD,
    password: DB_PASSWORD_PROD,
    database: DB_DATABASE_PROD,
    host: DB_HOST_PROD,
    dialect: "postgres",
  },
}
