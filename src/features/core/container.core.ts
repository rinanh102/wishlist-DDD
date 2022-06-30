// import {Container} from "inversify";
// import { CreaateWishlistUseCase, DeleteWishlistUseCase } from "../wishlist/app/usecases/wishlist/command";
// import { GetListWishlistByUserIdUseCase } from "../wishlist/app/usecases/wishlist/query";
// import { WishlistRepo } from "../wishlist/domain/repos";
// import { WishlistDAO } from "../wishlist/infra/database/daos";
// import { TYPES } from "./types.core";


// export const container = new Container();
// container.bind(TYPES.WishlistDAO).to(WishlistDAO).inSingletonScope();
// container.bind(TYPES.WishlistRepo).to(WishlistRepo).inSingletonScope();
// container.bind(TYPES.GetListWishlistByUserIdUseCase).to(GetListWishlistByUserIdUseCase).inSingletonScope();
// container.bind(TYPES.CreaateWishlistUseCase).to(CreaateWishlistUseCase).inSingletonScope();
// container.bind(TYPES.DeleteWishlistUseCase).to(DeleteWishlistUseCase).inSingletonScope();