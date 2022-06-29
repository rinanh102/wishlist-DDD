import { IWishlistRepo } from "src/features/wishlist/domain/repos/interfaces";
import { inject, injectable } from "inversify";
import { TYPES } from "src/features/core/types.core";
import { WishlistDTO } from "src/features/wishlist/domain/dtos/wishlist.dto";


@injectable()
export class GetListWishlistByUserIdUseCase {

    private _wishlist: IWishlistRepo

    constructor(
        @inject(TYPES.WishlistRepo) private readonly wishlistRepo: IWishlistRepo

    ) {
        this._wishlist = wishlistRepo;
    }

    public async execute (user_id: string) : Promise<WishlistDTO> {

        throw new Error("Method not implemented.");    }
}