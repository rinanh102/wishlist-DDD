import { Body, Delete, Get, Inject, Param, Post, Request, Response, Rest } from "@heronjs/common";
import { HttpRequest, HttpResponse } from "@heronjs/express";
import { Observable, of } from "rxjs";
import { TOKENS } from "src/contants";
import { WishlistItemDTO } from "../../domain/dtos";
import { ICreaateWishlistUseCase, IDeleteWishlistUseCase, IGetListWishlistByUserIdUseCase } from "../usecases/interfaces";
import { CreaateWishlistUseCase, DeleteWishlistUseCase } from "../usecases/wishlist/command";
import { GetListWishlistByUserIdUseCase } from "../usecases/wishlist/query";
import { WishlistOutputProps } from "../usecases/wishlist/query/types";



@Rest('/wishlist')
export class WishlistController {

    public constructor (
        @Inject(TOKENS.GetListWishlistByUserIdUseCase) private readonly _getListWishlistUseCase: IGetListWishlistByUserIdUseCase,
        @Inject(TOKENS.CreaateWishlistUseCase) private readonly _creaateWishlistUseCase: ICreaateWishlistUseCase,
        @Inject(TOKENS.DeleteWishlistUseCase) private readonly _deleteWishlistUseCase: IDeleteWishlistUseCase,
    ) {

    }

    @Get({ uri: '/:user_id'})
    public async GetListWishlistByUserId(@Param('user_id') user_id: string ,@Request() req: HttpRequest, @Response() res: HttpResponse) {
        return of({ status: 'live' });
    }

    @Post({ uri: '/'})
    public async CreateWishlist(@Body() body: WishlistItemDTO, @Request() req: HttpRequest, @Response() res: HttpResponse) {

    }
    @Delete({ uri: '/'})
    public async DeleteWishlist(@Body() body: WishlistItemDTO, @Request() req: HttpRequest, @Response() res: HttpResponse){

    }

    @Get({ uri: '/'})
    public findAll() {
        return this._getListWishlistUseCase.findAll();
    }
}