"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreaateWishlistUseCase = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const contants_1 = require("src/contants");
let CreaateWishlistUseCase = class CreaateWishlistUseCase {
    constructor(_wishlistRepo) {
        this._wishlistRepo = _wishlistRepo;
    }
};
CreaateWishlistUseCase = tslib_1.__decorate([
    (0, common_1.Provider)({
        token: 'CreaateWishlistUseCase.provider',
        scope: common_1.Scope.SINGLETON,
    }),
    tslib_1.__param(0, (0, common_1.Inject)(contants_1.TOKENS.WishlistRepo)),
    tslib_1.__metadata("design:paramtypes", [Object])
], CreaateWishlistUseCase);
exports.CreaateWishlistUseCase = CreaateWishlistUseCase;
//# sourceMappingURL=create-wishlist.usecase.js.map