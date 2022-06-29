import {Container} from "inversify";
import { WishlistDAO } from "src/infra/database/daos";
import { CreaateWishlistUseCase, DeleteWishlistUseCase } from "../wishlist/app/usecases/wishlist/command/types";
import { GetListWishlistByUserIdUseCase } from "../wishlist/app/usecases/wishlist/query/types";
import { WishlistRepo } from "../wishlist/domain/repos";
import { TYPES } from "./types.core";


export const container = new Container();
container.bind(TYPES.WishlistDAO).to(WishlistDAO).inSingletonScope();
container.bind(TYPES.WishlistRepo).to(WishlistRepo).inSingletonScope();
container.bind(TYPES.GetListWishlistByUserIdUseCase).to(GetListWishlistByUserIdUseCase).inSingletonScope();
container.bind(TYPES.CreaateWishlistUseCase).to(CreaateWishlistUseCase).inSingletonScope();
container.bind(TYPES.DeleteWishlistUseCase).to(DeleteWishlistUseCase).inSingletonScope();