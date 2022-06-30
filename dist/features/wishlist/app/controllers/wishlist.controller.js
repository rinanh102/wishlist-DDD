"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const contants_1 = require("src/contants");
const command_1 = require("../usecases/wishlist/command");
const query_1 = require("../usecases/wishlist/query");
let WishlistController = class WishlistController {
    constructor(_getListWishlistUseCase, _creaateWishlistUseCase, _deleteWishlistUseCase) {
        this._getListWishlistUseCase = _getListWishlistUseCase;
        this._creaateWishlistUseCase = _creaateWishlistUseCase;
        this._deleteWishlistUseCase = _deleteWishlistUseCase;
    }
    async GetListWishlistByUserId(user_id, req, res) {
        return this._getListWishlistUseCase.execute(user_id);
    }
    async CreateWishlist(body, req, res) {
    }
    async DeleteWishlist(body, req, res) {
    }
    findAll(req, res) {
        return this._getListWishlistUseCase.findAll();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)({ uri: '/:user_id' }),
    tslib_1.__param(0, (0, common_1.Param)('user_id')),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Response)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistController.prototype, "GetListWishlistByUserId", null);
tslib_1.__decorate([
    (0, common_1.Post)({ uri: '/' }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Response)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistController.prototype, "CreateWishlist", null);
tslib_1.__decorate([
    (0, common_1.Delete)({ uri: '/' }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Response)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistController.prototype, "DeleteWishlist", null);
tslib_1.__decorate([
    (0, common_1.Get)({ uri: '/' }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Response)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], WishlistController.prototype, "findAll", null);
WishlistController = tslib_1.__decorate([
    (0, common_1.Rest)('/wishlist'),
    tslib_1.__param(0, (0, common_1.Inject)(contants_1.TOKENS.GetListWishlistByUserIdUseCase)),
    tslib_1.__param(1, (0, common_1.Inject)(contants_1.TOKENS.CreaateWishlistUseCase)),
    tslib_1.__param(2, (0, common_1.Inject)(contants_1.TOKENS.DeleteWishlistUseCase)),
    tslib_1.__metadata("design:paramtypes", [query_1.GetListWishlistByUserIdUseCase,
        command_1.CreaateWishlistUseCase,
        command_1.DeleteWishlistUseCase])
], WishlistController);
exports.WishlistController = WishlistController;
//# sourceMappingURL=wishlist.controller.js.map