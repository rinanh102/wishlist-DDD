import { WishlistItemModel } from "../../domain/aggregates";
import { WishlistItemDTO } from "../../domain/dtos";
import { WishlistItemRecord } from "../../infra/database/records/wishlist.record";
import { IMapper } from "./IMapper.interface";



export class WishlistMapper implements IMapper<WishlistItemRecord, WishlistItemDTO, WishlistItemModel> {
    fromRecordToDTO(record: WishlistItemRecord): WishlistItemDTO {
        throw new Error("Method not implemented.");
    }
    fromDTOtoRecord(dto: WishlistItemDTO): WishlistItemRecord {
        throw new Error("Method not implemented.");
    }
    fromDTOtoEntity(dto: WishlistItemDTO): WishlistItemModel {
        throw new Error("Method not implemented.");
    }
    fromEntityToDTO(entity: WishlistItemModel): WishlistItemDTO {
        throw new Error("Method not implemented.");
    }

    
}