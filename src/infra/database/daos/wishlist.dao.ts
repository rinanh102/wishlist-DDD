import { Dao, DatabaseLookup, ModuleDatabase, Optional, Scope } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { WishlistModel } from 'src/features/wishlist/domain/aggregates';
import { IWishlistDAO } from './interfaces/IWishlistdao.interface';
import { injectable } from "inversify";

@Dao({
    token: 'wishlist.dao',
    scope: Scope.SINGLETON,
})
@injectable()
export class WishlistDAO implements IWishlistDAO {
    private client: Optional<KnexClient>;
    constructor(
        @DatabaseLookup() _db: ModuleDatabase<KnexClient>
        ) {
         this.client = _db.database()  
    }
    findAll(): string[] {
        return ['todo'];  
    }

    
    create(item: WishlistModel): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    delete(ids: string[]): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    async getWishlistByUserId(user_id: string): Promise<WishlistModel[]> {
        throw new Error('Method not implemented.');

        // try {
        //     if (this.client) {
        //         const rawData = this.client.select('*').from('wishlist');
        //         return rawData;
        //     }
        //     return 
        // }
    }
    

}