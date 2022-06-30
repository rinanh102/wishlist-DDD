"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalApiErrorInterceptor = exports.CheckHeaderInterceptor = void 0;
const CheckHeaderInterceptor = (req, res, next) => {
    return next();
};
exports.CheckHeaderInterceptor = CheckHeaderInterceptor;
const GlobalApiErrorInterceptor = (err, req, res, next) => {
    return next();
};
exports.GlobalApiErrorInterceptor = GlobalApiErrorInterceptor;
//# sourceMappingURL=tracking.interceptors.js.map