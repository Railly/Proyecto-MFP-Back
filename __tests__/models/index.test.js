const path = require("path")
const Sequelize = require("sequelize")
const env = process.env.NODE_ENV || "development"
const config = require(path.resolve(__dirname, "../../config/config.js"))[env]

test("index.js", () => {
  expect(Sequelize).toBeDefined()
  expect(env).toBeDefined()
  expect(config).toBeDefined()
  let sequelize
  if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
  } else {
    sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config
    )
  }
  expect(sequelize).toBeDefined()
})
