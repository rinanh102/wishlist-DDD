"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistDAO = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
let WishlistDAO = class WishlistDAO {
    constructor(_db) {
        this.client = _db.database();
    }
    findAll() {
        return ['todo'];
    }
    create(item) {
        throw new Error('Method not implemented.');
    }
    delete(ids) {
        throw new Error('Method not implemented.');
    }
    async getWishlistByUserId(user_id) {
        throw new Error('Method not implemented.');
    }
};
WishlistDAO = tslib_1.__decorate([
    (0, common_1.Dao)({
        token: 'wishlist.dao',
        scope: common_1.Scope.SINGLETON,
    }),
    tslib_1.__param(0, (0, common_1.DatabaseLookup)()),
    tslib_1.__metadata("design:paramtypes", [Object])
], WishlistDAO);
exports.WishlistDAO = WishlistDAO;
//# sourceMappingURL=wishlist.dao.js.map