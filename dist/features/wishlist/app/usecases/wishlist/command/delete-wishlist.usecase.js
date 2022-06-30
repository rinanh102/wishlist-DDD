"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWishlistUseCase = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const contants_1 = require("src/contants");
let DeleteWishlistUseCase = class DeleteWishlistUseCase {
    constructor(_wishlistRepo) {
        this._wishlistRepo = _wishlistRepo;
    }
};
DeleteWishlistUseCase = tslib_1.__decorate([
    (0, common_1.Provider)({
        token: 'DeleteWishlistUseCase.provider',
        scope: common_1.Scope.SINGLETON,
    }),
    tslib_1.__param(0, (0, common_1.Inject)(contants_1.TOKENS.WishlistRepo)),
    tslib_1.__metadata("design:paramtypes", [Object])
], DeleteWishlistUseCase);
exports.DeleteWishlistUseCase = DeleteWishlistUseCase;
//# sourceMappingURL=delete-wishlist.usecase.js.map