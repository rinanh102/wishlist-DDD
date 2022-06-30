"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDAO = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
let BaseDAO = class BaseDAO {
    create(item) {
        throw new Error("Method not implemented.");
    }
    delete(ids) {
        throw new Error("Method not implemented.");
    }
};
BaseDAO = tslib_1.__decorate([
    (0, common_1.Dao)({
        token: 'base.dao',
        scope: common_1.Scope.SINGLETON
    })
], BaseDAO);
exports.BaseDAO = BaseDAO;
//# sourceMappingURL=base.dao.js.map