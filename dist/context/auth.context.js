"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthContext = void 0;
const common_1 = require("@heronjs/common");
const http_status_codes_1 = require("http-status-codes");
const rxjs_1 = require("rxjs");
class AuthContext {
    OnGuard(data) {
        if (!data)
            throw new common_1.APIError(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Invalid Token!');
        return (0, rxjs_1.of)(data || { roles: ['admin', 'moderator'], permissions: ['add-user'] });
    }
}
exports.AuthContext = AuthContext;
_a = AuthContext;
AuthContext.Resolver = {
    http: ['header', 'authorization'], ws: ['handshake', 'token'],
    resolve: async (data) => {
        return {};
    }
};
//# sourceMappingURL=auth.context.js.map