"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@heronjs/core");
const app_module_1 = require("./app.module");
const main = async () => {
    const app = await core_1.HeronJS.create({ module: app_module_1.AppModule });
    app.listen({
        port: 3000
    });
    return app;
};
(async () => main())();
//# sourceMappingURL=index.js.map