export class WishlistItemModel {
    private product: string;

    constructor(product: string){
        this.product = product
    }

    get wishlist (): string {
        return this.product;
    }

    
}