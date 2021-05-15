module.exports = {
    client: 'postgresql',
    connection: {
      database: 'users_angular',
      user:     'postgres',
      password: 'dann'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
