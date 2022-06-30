"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDatabase = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const core_1 = require("@heronjs/core");
const PostgresDatabaseConfiguration = {
    client: common_1.DatabaseClient.KNEX,
    config: {
        host: process.env.POSTGRES_HOST || 'localhost',
        port: process.env.POSTGRES_PORT || 5432,
        user: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'root',
        database: process.env.POSTGRES_DATABASE || 'ci_wishlist',
        pooling: { min: 1, max: 10 },
        driver: common_1.DatabaseDriver.POSTGRES,
        cluster: {
            slaves: process.env.POSTGRES_SLAVES || 'tcp://localhost:5432?user=postgres&password=root&database=ci_wishlist'
        }
    }
};
let PostgresDatabase = class PostgresDatabase extends core_1.AbstractKnexDatabaseClient {
    constructor() {
        super();
    }
    context() {
        return this;
    }
};
PostgresDatabase = tslib_1.__decorate([
    (0, common_1.UseConfig)(PostgresDatabaseConfiguration),
    (0, common_1.Default)(),
    tslib_1.__metadata("design:paramtypes", [])
], PostgresDatabase);
exports.PostgresDatabase = PostgresDatabase;
//# sourceMappingURL=postgres.database.js.map