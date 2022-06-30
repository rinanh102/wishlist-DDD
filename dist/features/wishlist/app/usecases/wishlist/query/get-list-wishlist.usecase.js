"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetListWishlistByUserIdUseCase = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const contants_1 = require("src/contants");
let GetListWishlistByUserIdUseCase = class GetListWishlistByUserIdUseCase {
    constructor(_wishlistRepo) {
        this._wishlistRepo = _wishlistRepo;
    }
    async execute(user_id) {
        return this._wishlistRepo.findAll();
    }
    findAll() {
        return ['todos'];
    }
};
GetListWishlistByUserIdUseCase = tslib_1.__decorate([
    (0, common_1.Provider)({
        token: 'GetListWishlistByUserIdUseCase.provider',
        scope: common_1.Scope.SINGLETON,
    }),
    tslib_1.__param(0, (0, common_1.Inject)(contants_1.TOKENS.WishlistRepo)),
    tslib_1.__metadata("design:paramtypes", [Object])
], GetListWishlistByUserIdUseCase);
exports.GetListWishlistByUserIdUseCase = GetListWishlistByUserIdUseCase;
//# sourceMappingURL=get-list-wishlist.usecase.js.map