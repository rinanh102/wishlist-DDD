import { WishlistModel } from "../../aggregates";
import { IBase } from "./IBase.interface";

export interface IWishlistRepo extends IBase<WishlistModel> {
    getWishlistByUserId(user_id: string): Promise<WishlistModel[]>
    findAll(): string[];
}