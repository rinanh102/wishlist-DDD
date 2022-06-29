import { Rest } from "@heronjs/common";
import { inject, injectable } from "inversify";
import { TYPES } from "src/features/core/types.core";
import { CreaateWishlistUseCase, DeleteWishlistUseCase } from "../usecases/wishlist/command/types";
import { GetListWishlistByUserIdUseCase } from "../usecases/wishlist/query/types";



@Rest('/wishlist')
export class WishlistController {

    private _getListWishlistUseCase: GetListWishlistByUserIdUseCase;
    private _createWishlistUseCase: CreaateWishlistUseCase;
    private _deleteWishlistUsecase: DeleteWishlistUseCase;


    public constructor (
        @inject(TYPES.GetListWishlistByUserIdUseCase) private readonly getListWishlistUseCase: GetListWishlistByUserIdUseCase,
        @inject(TYPES.CreaateWishlistUseCase) private readonly creaateWishlistUseCase: CreaateWishlistUseCase,
        @inject(TYPES.DeleteWishlistUseCase) private readonly deleteWishlistUseCase: DeleteWishlistUseCase,
    ) {
        this._getListWishlistUseCase = getListWishlistUseCase;
        this._createWishlistUseCase = creaateWishlistUseCase;
        this._deleteWishlistUsecase = deleteWishlistUseCase;
    }


}