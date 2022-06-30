import { Observable } from "rxjs";
declare type OutputProps = {
    status: string;
};
declare class TodoApi {
    constructor();
    liveness(): Observable<OutputProps>;
    readiness(): Observable<OutputProps>;
}
export { TodoApi };
