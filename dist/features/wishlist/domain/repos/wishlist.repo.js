"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistRepo = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const contants_1 = require("src/contants");
let WishlistRepo = class WishlistRepo {
    constructor(_wishlistDao) {
        this._wishlistDao = _wishlistDao;
    }
    getWishlistByUserId(user_id) {
        throw new Error("Method not implemented.");
    }
    create(item) {
        throw new Error("Method not implemented.");
    }
    delete(ids) {
        throw new Error("Method not implemented.");
    }
    findAll() {
        return this._wishlistDao.findAll();
    }
};
WishlistRepo = tslib_1.__decorate([
    (0, common_1.Repository)({
        token: 'wishlist.repository',
        scope: common_1.Scope.SINGLETON,
    }),
    tslib_1.__param(0, (0, common_1.Inject)(contants_1.TOKENS.WishlistDAO)),
    tslib_1.__metadata("design:paramtypes", [Object])
], WishlistRepo);
exports.WishlistRepo = WishlistRepo;
//# sourceMappingURL=wishlist.repo.js.map