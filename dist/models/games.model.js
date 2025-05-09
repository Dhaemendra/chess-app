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
const _mongoose = require("mongoose");
const pieceSchema = new _mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: [
            'pawn',
            'rook',
            'knight',
            'bishop',
            'queen',
            'king'
        ]
    },
    color: {
        type: String,
        required: true,
        enum: [
            'w',
            'b'
        ]
    },
    position: {
        type: {
            x: Number,
            y: Number
        },
        required: true
    }
});
const gameSchema = new _mongoose.Schema({
    gameId: {
        type: String,
        required: true
    },
    piecesOnBoard: {
        type: [
            pieceSchema
        ],
        required: true
    },
    fallenPieces: {
        type: [
            pieceSchema
        ],
        required: true
    },
    playerTurn: {
        type: String,
        required: true,
        enum: [
            'w',
            'b'
        ]
    },
    userId: {
        type: _mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});
gameSchema.index({
    gameId: 1,
    userId: 1
}, {
    unique: true
});
const gameModel = (0, _mongoose.model)('Game', gameSchema);
const _default = gameModel;

//# sourceMappingURL=games.model.js.map