import { WishlistModel } from "src/features/wishlist/domain/aggregates";
import { IBase } from "./IBase.interface";

export interface IWishlistDAO extends IBase<WishlistModel> {
    getWishlistByUserId(user_id: string): Promise<WishlistModel[]>
    findAll(): string[];
}