import { WishlistModel } from "src/features/wishlist/domain/aggregates";
import { WishlistItemDTO } from "src/features/wishlist/domain/dtos";
import { IBase } from "./IBase.interface";

export interface IWishlistDAO extends IBase<WishlistModel> {
    getWishlistByUserIdMock(): any;
    getWishlistByUserId(user_id: string): Promise<WishlistItemDTO[]>
    findAll(): string[];
}