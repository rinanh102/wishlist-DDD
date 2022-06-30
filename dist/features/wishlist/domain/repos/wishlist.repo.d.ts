import { WishlistModel } from "../aggregates";
import { IWishlistRepo } from "./interfaces/IWishlistRepo.interface";
import { IWishlistDAO } from "../../infra/database/daos/interfaces/IWishlistdao.interface";
export declare class WishlistRepo implements IWishlistRepo {
    private readonly _wishlistDao;
    constructor(_wishlistDao: IWishlistDAO);
    getWishlistByUserId(user_id: string): Promise<WishlistModel[]>;
    create(item: WishlistModel): Promise<boolean>;
    delete(ids: string[]): Promise<boolean>;
    findAll(): string[];
}
