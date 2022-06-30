import { IBase } from "../interfaces/IBase.interface";
export declare abstract class BaseDAO<T> implements IBase<T> {
    create(item: T): Promise<boolean>;
    delete(ids: string[]): Promise<boolean>;
}
