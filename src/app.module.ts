import { Databases, GateKeeper, Module } from "@heronjs/common";
import { HealthApi, TodoApi } from "./api";
import { AuthContext } from "./context";
import { WishlistController } from "./features/wishlist/app/controllers";
import { WishlistDAO } from "./infra/database/daos";
import { PostgresDatabase } from "./infra/database/postgres";

@Module({
    controllers: [HealthApi, TodoApi, WishlistController],
    providers: [WishlistDAO],
})
@GateKeeper(AuthContext, AuthContext.Resolver)
@Databases([PostgresDatabase])
class AppModule { }

export { AppModule };