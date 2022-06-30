import { HttpRequest, HttpResponse } from "@heronjs/express";
import { WishlistDTO } from "../../domain/dtos";
import { CreaateWishlistUseCase, DeleteWishlistUseCase } from "../usecases/wishlist/command";
import { GetListWishlistByUserIdUseCase } from "../usecases/wishlist/query";
export declare class WishlistController {
    private readonly _getListWishlistUseCase;
    private readonly _creaateWishlistUseCase;
    private readonly _deleteWishlistUseCase;
    constructor(_getListWishlistUseCase: GetListWishlistByUserIdUseCase, _creaateWishlistUseCase: CreaateWishlistUseCase, _deleteWishlistUseCase: DeleteWishlistUseCase);
    GetListWishlistByUserId(user_id: string, req: HttpRequest, res: HttpResponse): Promise<string[]>;
    CreateWishlist(body: WishlistDTO, req: HttpRequest, res: HttpResponse): Promise<void>;
    DeleteWishlist(body: WishlistDTO, req: HttpRequest, res: HttpResponse): Promise<void>;
    findAll(req: HttpRequest, res: HttpResponse): string[];
}
