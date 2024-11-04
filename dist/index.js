"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const redisClient_1 = require("./redis/redisClient");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
(function connectToRedis() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("hy");
        if (!redisClient_1.client.isOpen) {
            try {
                yield redisClient_1.client.connect();
                console.log("Connected to Redis");
            }
            catch (error) {
                console.error("Error connecting to Redis:", error);
            }
        }
    });
})();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)()); // Parse cookies
