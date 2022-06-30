import { WishlistModel } from "../aggregates";
import { IWishlistRepo } from "./interfaces/IWishlistRepo.interface";
import { IWishlistDAO } from "../../infra/database/daos/interfaces/IWishlistdao.interface";
import { Inject, Repository, Scope } from "@heronjs/common";
import { TOKENS } from "src/contants";


@Repository({
    token: 'wishlist.repository',
    scope: Scope.SINGLETON,
})
export class WishlistRepo implements IWishlistRepo {

    public constructor(
        @Inject(TOKENS.WishlistDAO) private readonly _wishlistDao: IWishlistDAO
    ) {
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

    public findAll() {
        return this._wishlistDao.getWishlistByUserIdMock();
    }

}