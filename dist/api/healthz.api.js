"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthApi = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const rxjs_1 = require("rxjs");
let HealthApi = class HealthApi {
    liveness() {
        return (0, rxjs_1.of)({ status: 'live' });
    }
    readiness() {
        return (0, rxjs_1.of)({ status: 'ready' });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)({ uri: '/liveness' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], HealthApi.prototype, "liveness", null);
tslib_1.__decorate([
    (0, common_1.Get)({ uri: '/readiness' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], HealthApi.prototype, "readiness", null);
HealthApi = tslib_1.__decorate([
    (0, common_1.Rest)('/healthz')
], HealthApi);
exports.HealthApi = HealthApi;
//# sourceMappingURL=healthz.api.js.map