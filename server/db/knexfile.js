const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  development: {
    client: "mssql",
    connection: {
      server: "localhost",
      user: "sa",
      password: "iQ123456",
      database: "hospital-management",
      port: 1433,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },

    seeds: {
      directory: "./seeds",
    },

    ...knexSnakeCaseMappers,
  },
};
