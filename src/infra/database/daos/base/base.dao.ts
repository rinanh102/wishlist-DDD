import { IBase } from "../interfaces/base.interface";
import { inject, injectable } from "inversify";
import { Dao, Scope} from '@heronjs/common';


@Dao({
    token: 'base.dao',
    scope: Scope.SINGLETON
})
@injectable()
export abstract class BaseDAO<T> implements IBase<T> {



    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(ids: string[]): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}