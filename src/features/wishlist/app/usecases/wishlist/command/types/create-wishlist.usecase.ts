
import { IWishlistRepo } from "src/features/wishlist/domain/repos/interfaces";
import { inject, injectable } from "inversify";
import { TYPES } from "src/features/core/types.core";
import { WishlistDTO } from "src/features/wishlist/domain/dtos/wishlist.dto";

//validate request


// to create new wishlist Entity: call entity domain
// const entity = new entity()

// save: call repo

@injectable()
export class CreaateWishlistUseCase {
    private _wishlist: IWishlistRepo

    constructor(
        @inject(TYPES.WishlistRepo) private readonly wishlistRepo: IWishlistRepo

    ) {
        this._wishlist = wishlistRepo;
    }
}