import { ModuleDatabase } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { WishlistModel } from 'src/features/wishlist/domain/aggregates';
import { IWishlistDAO } from './interfaces/IWishlistdao.interface';
export declare class WishlistDAO implements IWishlistDAO {
    private client;
    constructor(_db: ModuleDatabase<KnexClient>);
    findAll(): string[];
    create(item: WishlistModel): Promise<boolean>;
    delete(ids: string[]): Promise<boolean>;
    getWishlistByUserId(user_id: string): Promise<WishlistModel[]>;
}
