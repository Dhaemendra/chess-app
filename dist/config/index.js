"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CREDENTIALS: function() {
        return CREDENTIALS;
    },
    DB_DATABASE: function() {
        return DB_DATABASE;
    },
    DB_HOST: function() {
        return DB_HOST;
    },
    DB_PORT: function() {
        return DB_PORT;
    },
    LOG_FORMAT: function() {
        return LOG_FORMAT;
    },
    MONGODB_URI: function() {
        return MONGODB_URI;
    },
    NODE_ENV: function() {
        return NODE_ENV;
    },
    ORIGIN: function() {
        return ORIGIN;
    },
    PORT: function() {
        return PORT;
    },
    SECRET_KEY: function() {
        return SECRET_KEY;
    }
});
const _dotenv = require("dotenv");
(0, _dotenv.config)({
    path: `.env.${process.env.NODE_ENV || 'development'}.local`
});
const CREDENTIALS = process.env.CREDENTIALS === 'true';
const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_DATABASE, SECRET_KEY, LOG_FORMAT, ORIGIN, MONGODB_URI } = process.env;

//# sourceMappingURL=index.js.map