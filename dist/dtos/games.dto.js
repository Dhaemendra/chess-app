"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateOrUpdateGameDto", {
    enumerable: true,
    get: function() {
        return CreateOrUpdateGameDto;
    }
});
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
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreateOrUpdateGameDto = class CreateOrUpdateGameDto {
    constructor(){
        _define_property(this, "gameId", void 0);
        _define_property(this, "piecesOnBoard", void 0);
        _define_property(this, "fallenPieces", void 0);
        _define_property(this, "playerTurn", void 0);
    }
};
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateOrUpdateGameDto.prototype, "gameId", void 0);
_ts_decorate([
    (0, _classvalidator.IsArray)(),
    _ts_metadata("design:type", typeof Array === "undefined" ? Object : Array)
], CreateOrUpdateGameDto.prototype, "piecesOnBoard", void 0);
_ts_decorate([
    (0, _classvalidator.IsArray)(),
    _ts_metadata("design:type", typeof Array === "undefined" ? Object : Array)
], CreateOrUpdateGameDto.prototype, "fallenPieces", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateOrUpdateGameDto.prototype, "playerTurn", void 0);

//# sourceMappingURL=games.dto.js.map