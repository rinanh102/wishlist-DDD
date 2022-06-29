
export class WishlistModel {
    private products: string[];

    constructor(products: string[]){
        this.products = products
    }

    get wishlist (): string[] {
        return this.products;
    }

    public addProduct (product: string){
        this.products.push(product);
    }
}