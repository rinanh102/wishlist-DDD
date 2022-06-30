export interface IMapper<Record, DTO, Entity> {
    fromRecordToDTO(record: Record) : DTO;
    fromDTOtoRecord(dto: DTO) : Record;
    fromDTOtoEntity(dto: DTO) : Entity;
    fromEntityToDTO(entity: Entity) : DTO;
}