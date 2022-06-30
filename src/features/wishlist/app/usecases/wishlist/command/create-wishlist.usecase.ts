
import { IWishlistRepo } from "src/features/wishlist/domain/repos/interfaces";
import { Inject, Provider, Scope } from "@heronjs/common";
import { TOKENS } from "src/contants";
import { ICreaateWishlistUseCase } from "../../interfaces/wishlist.usecase.interface";

//validate request


// to create new wishlist Entity: call entity domain
// const entity = new entity()

// save: call repo
@Provider({
    token: 'CreaateWishlistUseCase.provider',
    scope: Scope.SINGLETON,
})
export class CreaateWishlistUseCase implements ICreaateWishlistUseCase {

    constructor(
        @Inject(TOKENS.WishlistRepo) private readonly _wishlistRepo: IWishlistRepo
    ) {
    }
}