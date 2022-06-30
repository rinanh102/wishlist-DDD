export interface IBase<T> {
    create(item: T): Promise<boolean>;
    delete(ids: string[]): Promise<boolean>;
}
