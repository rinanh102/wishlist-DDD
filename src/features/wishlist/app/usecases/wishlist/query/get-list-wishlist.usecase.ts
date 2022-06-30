import { IWishlistRepo } from "src/features/wishlist/domain/repos/interfaces";
import { WishlistItemDTO } from "src/features/wishlist/domain/dtos/wishlist.dto";
import { Inject, Provider, Scope } from "@heronjs/common";
import { TOKENS } from "src/contants";
import { IGetListWishlistByUserIdUseCase } from "../../interfaces/wishlist.usecase.interface";


@Provider({
    token: 'GetListWishlistByUserIdUseCase.provider',
    scope: Scope.SINGLETON,
})
export class GetListWishlistByUserIdUseCase implements IGetListWishlistByUserIdUseCase {

    constructor(
        @Inject(TOKENS.WishlistRepo) private readonly _wishlistRepo: IWishlistRepo
    ) {
    }

    public async execute (user_id: string) {
        return this._wishlistRepo.findAll()
    }
    public findAll() {
        return this._wishlistRepo.findAll()
    }
}