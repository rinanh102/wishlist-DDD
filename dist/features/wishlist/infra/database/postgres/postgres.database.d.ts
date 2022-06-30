import { DatabaseContext } from "@heronjs/common";
import { AbstractKnexDatabaseClient, KnexClient } from "@heronjs/core";
export declare class PostgresDatabase extends AbstractKnexDatabaseClient<KnexClient> {
    constructor();
    context(): DatabaseContext<any, any>;
}
