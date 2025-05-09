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
const _HttpException = require("../exceptions/HttpException");
const _gamesmodel = /*#__PURE__*/ _interop_require_default(require("../models/games.model"));
const _classvalidator = require("class-validator");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
let GameService = class GameService {
    async createGame(gameData, userId) {
        if ((0, _classvalidator.isEmpty)(gameData)) throw new _HttpException.HttpException(400, 'gameData is empty');
        const findGame = await this.games.findOne({
            gameId: gameData.gameId,
            userId: userId
        });
        if (findGame) throw new _HttpException.HttpException(409, `This game ${gameData.gameId} already exists`);
        const createGameData = await this.games.create(_object_spread_props(_object_spread({}, gameData), {
            userId: userId
        }));
        return createGameData;
    }
    async getAllGamesOfUser(userId) {
        if ((0, _classvalidator.isEmpty)(userId)) throw new _HttpException.HttpException(400, 'userId is empty');
        const findGames = await this.games.find({
            userId: userId
        }).select('gameId');
        return findGames;
    }
    async getGameById(id) {
        if ((0, _classvalidator.isEmpty)(id)) throw new _HttpException.HttpException(400, 'gameId is empty');
        const findGame = await this.games.findById(id);
        if (!findGame) throw new _HttpException.HttpException(404, `This game does not exist`);
        return findGame;
    }
    async updateGame(id, gameData) {
        if ((0, _classvalidator.isEmpty)(gameData)) throw new _HttpException.HttpException(400, 'gameData is empty');
        const updateGameById = await this.games.findByIdAndUpdate(id, gameData);
        if (!updateGameById) throw new _HttpException.HttpException(404, `This game ${gameData.gameId} does not exist`);
        return updateGameById;
    }
    async deleteGame(id) {
        if ((0, _classvalidator.isEmpty)(id)) throw new _HttpException.HttpException(400, 'gameId is empty');
        const deleteGameById = await this.games.findByIdAndDelete(id);
        if (!deleteGameById) throw new _HttpException.HttpException(404, `This game does not exist`);
        return deleteGameById;
    }
    constructor(){
        _define_property(this, "games", _gamesmodel.default);
    }
};
const _default = GameService;

//# sourceMappingURL=games.service.js.map