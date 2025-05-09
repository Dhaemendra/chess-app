"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _gamescontroller = /*#__PURE__*/ _interop_require_default(require("../controllers/games.controller"));
const _gamesdto = require("../dtos/games.dto");
const _authmiddleware = /*#__PURE__*/ _interop_require_default(require("../middlewares/auth.middleware"));
const _validationmiddleware = /*#__PURE__*/ _interop_require_default(require("../middlewares/validation.middleware"));
const _express = require("express");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let GameRoutes = class GameRoutes {
    initializeRoutes() {
        this.router.post(`${this.path}/`, (0, _validationmiddleware.default)(_gamesdto.CreateOrUpdateGameDto, 'body'), _authmiddleware.default, this.gamesController.createGame);
        this.router.get(`${this.path}/`, _authmiddleware.default, this.gamesController.getAllGamesOfUser);
        this.router.get(`${this.path}/:id`, this.gamesController.getGameById);
        this.router.put(`${this.path}/:id`, (0, _validationmiddleware.default)(_gamesdto.CreateOrUpdateGameDto, 'body'), this.gamesController.updateGame);
        this.router.delete(`${this.path}/:id`, this.gamesController.deleteGame);
    }
    constructor(){
        _define_property(this, "path", '/games');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "gamesController", new _gamescontroller.default());
        this.initializeRoutes();
    }
};
const _default = GameRoutes;

//# sourceMappingURL=games.route.js.map