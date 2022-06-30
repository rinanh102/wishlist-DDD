import { Dao, DatabaseLookup, ModuleDatabase, Optional, Scope } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { WishlistModel } from 'src/features/wishlist/domain/aggregates';
import { WishlistItemDTO } from 'src/features/wishlist/domain/dtos';
import { IWishlistDAO } from './interfaces/IWishlistdao.interface';

@Dao({
    token: 'wishlist.dao',
    scope: Scope.SINGLETON,
})
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
    public async getWishlistByUserId(user_id: string): Promise<WishlistItemDTO[]> {
        throw new Error('Method not implemented.');
        // try {
        //     if (this.client) {
        //         const rawData = this.client.select('*').from('wishlist');
        //         console.log
        //         return rawData;
        //     }
             
        // } catch (error) {
        //     console.log(error)
        // }
    }
    public async getWishlistByUserIdMock() {
        try {
            if (this.client) {
                const rawData = await this.client.select('*').from('wishlist');
                console.log(rawData)
                return rawData;
            }
            console.log("cannot access DB"); 
        } catch (error) {
            console.log(error)
        }
    }
    

}