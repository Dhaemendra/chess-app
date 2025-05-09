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
const _gamesservice = /*#__PURE__*/ _interop_require_default(require("../services/games.service"));
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
let GamesController = class GamesController {
    constructor(){
        _define_property(this, "gameService", new _gamesservice.default());
        _define_property(this, "createGame", async (req, res, next)=>{
            try {
                const gameData = req.body;
                const userId = req.user._id;
                const createGameData = await this.gameService.createGame(gameData, userId);
                res.status(201).json({
                    data: createGameData,
                    message: 'createGame'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "getAllGamesOfUser", async (req, res, next)=>{
            try {
                const userId = req.user._id;
                const findAllGamesData = await this.gameService.getAllGamesOfUser(userId);
                res.status(200).json({
                    data: findAllGamesData,
                    message: 'findAll'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "getGameById", async (req, res, next)=>{
            try {
                const gameId = req.params.id;
                const findOneGameData = await this.gameService.getGameById(gameId);
                res.status(200).json({
                    data: findOneGameData,
                    message: 'findOne'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "updateGame", async (req, res, next)=>{
            try {
                const gameId = req.params.id;
                const gameData = req.body;
                const updateGameData = await this.gameService.updateGame(gameId, gameData);
                res.status(200).json({
                    data: updateGameData,
                    message: 'update'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "deleteGame", async (req, res, next)=>{
            try {
                const gameId = req.params.id;
                const deleteGameData = await this.gameService.deleteGame(gameId);
                res.status(200).json({
                    data: deleteGameData,
                    message: 'delete'
                });
            } catch (error) {
                next(error);
            }
        });
    }
};
const _default = GamesController;

//# sourceMappingURL=games.controller.js.map