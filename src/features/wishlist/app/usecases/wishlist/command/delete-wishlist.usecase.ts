import { IWishlistRepo } from "src/features/wishlist/domain/repos/interfaces";
import { WishlistItemDTO } from "src/features/wishlist/domain/dtos/wishlist.dto";
import { Inject, Provider, Scope } from "@heronjs/common";
import { TOKENS } from "src/contants";
import { IDeleteWishlistUseCase } from "../../interfaces/wishlist.usecase.interface";

//validate request


// to create new wishlist Entity: call entity domain
// const entity = new entity()

// save: call repo
@Provider({
    token: 'DeleteWishlistUseCase.provider',
    scope: Scope.SINGLETON,
})
export class DeleteWishlistUseCase implements IDeleteWishlistUseCase {

    constructor(
        @Inject(TOKENS.WishlistRepo) private readonly _wishlistRepo: IWishlistRepo

    ) {
    }
}