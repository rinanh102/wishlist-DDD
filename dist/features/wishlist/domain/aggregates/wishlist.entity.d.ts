export declare class WishlistModel {
    private products;
    constructor(products: string[]);
    get wishlist(): string[];
    addProduct(product: string): void;
}
