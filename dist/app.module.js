"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const api_1 = require("./api");
const context_1 = require("./context");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [api_1.HealthApi]
    }),
    (0, common_1.GateKeeper)(context_1.AuthContext, context_1.AuthContext.Resolver)
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map