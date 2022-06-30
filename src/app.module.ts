import { Databases, GateKeeper, Module } from "@heronjs/common";
import { HealthApi, TodoApi } from "./api";
import { AuthContext } from "./context";
import { WishlistController } from "./features/wishlist/app/controllers";
import { WishlistDAO } from "./features/wishlist/infra/database/daos";
import { PostgresDatabase } from "./features/wishlist/infra/database/postgres";
import { WishlistRepo } from "./features/wishlist/domain/repos";
import { GetListWishlistByUserIdUseCase } from "./features/wishlist/app/usecases/wishlist/query";
import { CreaateWishlistUseCase, DeleteWishlistUseCase } from "./features/wishlist/app/usecases/wishlist/command";

@Module({
    controllers: [HealthApi, TodoApi, WishlistController],
    providers: [WishlistDAO, WishlistRepo, GetListWishlistByUserIdUseCase, DeleteWishlistUseCase, CreaateWishlistUseCase],
})
@GateKeeper(AuthContext, AuthContext.Resolver)
@Databases([PostgresDatabase])
class AppModule { }

export { AppModule };