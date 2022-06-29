import { Observable } from "rxjs";
declare type OutputProps = {
    status: string;
};
declare class HealthApi {
    liveness(): Observable<OutputProps>;
    readiness(): Observable<OutputProps>;
}
export { HealthApi };
