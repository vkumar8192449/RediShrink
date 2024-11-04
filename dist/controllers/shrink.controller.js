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
exports.shrinkURL = void 0;
const shortid_1 = __importDefault(require("shortid"));
const redisClient_1 = require("../redis/redisClient");
const shrinkURL = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { originalUrl } = req.body;
    const urlId = shortid_1.default.generate();
    const shrinkUrl = `${process.env.BACKEND_URL}${process.env.PORT}/${urlId}`;
    yield redisClient_1.client.set(urlId, originalUrl);
    yield redisClient_1.client.set(`clicks:${urlId}`, 0); // Initialize click count
    res.json({ shrinkUrl });
});
exports.shrinkURL = shrinkURL;
