"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistModel = void 0;
class WishlistModel {
    constructor(products) {
        this.products = products;
    }
    get wishlist() {
        return this.products;
    }
    addProduct(product) {
        this.products.push(product);
    }
}
exports.WishlistModel = WishlistModel;
//# sourceMappingURL=wishlist.entity.js.map