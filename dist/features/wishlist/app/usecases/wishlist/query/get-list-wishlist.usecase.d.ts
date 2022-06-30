import { IWishlistRepo } from "src/features/wishlist/domain/repos/interfaces";
export declare class GetListWishlistByUserIdUseCase {
    private readonly _wishlistRepo;
    constructor(_wishlistRepo: IWishlistRepo);
    execute(user_id: string): Promise<string[]>;
    findAll(): string[];
}
