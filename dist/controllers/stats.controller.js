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
Object.defineProperty(exports, "__esModule", { value: true });
exports.statistics = void 0;
const redisClient_1 = require("../redis/redisClient");
const statistics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const urlId = req.params.shrinkurl;
    // Get click count from Redis
    const clickCount = yield redisClient_1.client.get(`clicks:${urlId}`);
    if (clickCount) {
        res.json({ clickCount });
    }
    else {
        res.status(404).json({ error: "URL not found" });
    }
});
exports.statistics = statistics;
