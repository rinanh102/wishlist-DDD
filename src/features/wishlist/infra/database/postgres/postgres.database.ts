import { CommonDatabaseConfig, DatabaseClient, DatabaseContext, DatabaseDriver, Default, UseConfig } from "@heronjs/common";
import { AbstractKnexDatabaseClient, KnexClient } from "@heronjs/core";
 
const PostgresDatabaseConfiguration = {
    client: DatabaseClient.KNEX,
    config: <CommonDatabaseConfig>{
        host: process.env.POSTGRES_HOST || 'localhost',
        port: process.env.POSTGRES_PORT || 5432,
        user: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'root',
        database: process.env.POSTGRES_DATABASE || 'ci_wishlist',
        pooling: {min: 1, max: 10},
        driver: DatabaseDriver.POSTGRES,
        cluster: {
            slaves: process.env.POSTGRES_SLAVES || 'tcp://localhost:5432?user=postgres&password=root&database=ci_wishlist'
        }
    }
};

@UseConfig(PostgresDatabaseConfiguration)
@Default()
export class PostgresDatabase extends AbstractKnexDatabaseClient<KnexClient> {
    constructor() {
        super();
    }

    context(): DatabaseContext<any, any> {
        return this;
    }
}