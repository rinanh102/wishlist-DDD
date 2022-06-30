import { IWishlistRepo } from "src/features/wishlist/domain/repos/interfaces";
export declare class DeleteWishlistUseCase {
    private readonly _wishlistRepo;
    constructor(_wishlistRepo: IWishlistRepo);
}
