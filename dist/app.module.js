"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const api_1 = require("./api");
const context_1 = require("./context");
const controllers_1 = require("./features/wishlist/app/controllers");
const daos_1 = require("./features/wishlist/infra/database/daos");
const postgres_1 = require("./features/wishlist/infra/database/postgres");
const repos_1 = require("./features/wishlist/domain/repos");
const query_1 = require("./features/wishlist/app/usecases/wishlist/query");
const command_1 = require("./features/wishlist/app/usecases/wishlist/command");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [api_1.HealthApi, api_1.TodoApi, controllers_1.WishlistController],
        providers: [daos_1.WishlistDAO, repos_1.WishlistRepo, query_1.GetListWishlistByUserIdUseCase, command_1.DeleteWishlistUseCase, command_1.CreaateWishlistUseCase],
    }),
    (0, common_1.GateKeeper)(context_1.AuthContext, context_1.AuthContext.Resolver),
    (0, common_1.Databases)([postgres_1.PostgresDatabase])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map