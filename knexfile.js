const fs = require('fs');

module.exports = {
    development: {
        client: 'pg',
        connection: {
          host: 'localhost',
          port: 5432,
          database: 'ci_wishlist',
          user:     'postgres',
          password: 'root'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: "knex_migrations"
        }
      },
    develop: {
        client: 'mysql',
        connection: {
            host: process.env.DATABASE_HOST || 'localhost',
            port: process.env.DATABASE_PORT || '3306',
            database: process.env.DATABASE_SCHEMA || 'test',
            user: process.env.DATABASE_USER || 'root',
            password: process.env.DATABASE_PASSWORD || 'dev@123',
            ssl: !!(process.env.DATABASE_SECURE_CONNECT && process.env.DATABASE_SECURE_CONNECT.toLowerCase() === 'true') ? {
                ca: fs.readFileSync(process.env.DATABASE_TLS_CERT).toString('utf-8')
            } : undefined
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: __dirname + '/migrations/tables',
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: __dirname + '/migrations/seeds'
        }
    },
    production: {
        client: 'postgresql',
        connection: {
            host: process.env.DATABASE_HOST || 'localhost',
            port: process.env.DATABASE_PORT || '5432',
            database: process.env.DATABASE_SCHEMA || 'test',
            user: process.env.DATABASE_USER || 'dev',
            password: process.env.DATABASE_PASSWORD || 'dev@123',
            ssl: !!(process.env.DATABASE_SECURE_CONNECT && process.env.DATABASE_SECURE_CONNECT.toLowerCase() === 'true') ? {
                ca: fs.readFileSync(process.env.DATABASE_TLS_CERT).toString('utf-8')
            } : undefined
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: __dirname + '/migrations/tables',
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: __dirname + '/migrations/seeds'
        }
    }
};