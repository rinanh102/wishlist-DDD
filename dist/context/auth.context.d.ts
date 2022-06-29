import { AuthResolver, SecureContext, SecureProperty } from "@heronjs/common";
import { Observable } from "rxjs";
declare type AuthProps = {
    sub?: string;
    roles?: string[];
};
declare class AuthContext implements SecureContext<AuthProps, SecureProperty> {
    OnGuard(data: AuthProps): Observable<SecureProperty>;
    static Resolver: AuthResolver<AuthProps>;
}
export { AuthContext };
