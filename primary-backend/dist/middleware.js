"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const authMiddleware = (req, res, next) => {
    console.log("reached here");
    const token = req.headers.authorization;
    const payload = jsonwebtoken_1.default.verify(token, config_1.JWT_PASSWORD);
    try {
        //@ts-ignore
        req.id = payload.id;
        next();
    }
    catch (e) {
        console.log('e', e);
        return res.status(403).json({
            message: "you are logged in"
        });
    }
};
exports.authMiddleware = authMiddleware;
