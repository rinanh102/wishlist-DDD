import { WishlistModel } from "../aggregates";
import { IWishlistRepo } from "./interfaces/IWishlistRepo.interface";
import { inject, injectable } from "inversify";
import { WishlistDAO } from "src/infra/database/daos";
import { TYPES } from "src/features/core/types.core";
import { IWishlistDAO } from "src/infra/database/daos/interfaces/IWishlistdao.interface";



@injectable()
export class WishlistRepo implements IWishlistRepo {
    private _wishlistDao: IWishlistDAO;

    public constructor(
        @inject(TYPES.WishlistDAO) private readonly wishlistDao: IWishlistDAO
    ) {
        this._wishlistDao = wishlistDao;
    }

    getWishlistByUserId(user_id: string): Promise<WishlistModel[]> {
        throw new Error("Method not implemented.");
    }
    create(item: WishlistModel): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(ids: string[]): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    findAll() {
        return this._wishlistDao.findAll();
    }

}