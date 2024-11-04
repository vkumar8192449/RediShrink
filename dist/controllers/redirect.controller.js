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
exports.redirect = void 0;
const redisClient_1 = require("../redis/redisClient");
const redirect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const urlId = req.params.redirect;
    // Retrieve the original URL from Redis
    const originalUrl = yield redisClient_1.client.get(`${urlId}`);
    if (originalUrl) {
        // Increment click count
        yield redisClient_1.client.incr(`clicks:${urlId}`);
        res.redirect(originalUrl);
    }
    else {
        res.status(404).json({ error: "URL not found" });
    }
});
exports.redirect = redirect;
