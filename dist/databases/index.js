"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dbConnection", {
    enumerable: true,
    get: function() {
        return dbConnection;
    }
});
const _config = require("../config");
const dbConnection = {
    url: _config.MONGODB_URI || `mongodb://${_config.DB_HOST}:${_config.DB_PORT}/${_config.DB_DATABASE}`
};

//# sourceMappingURL=index.js.map