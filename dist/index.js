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
require("dotenv/config");
const app_1 = require("./app");
const redisClient_1 = require("./redis/redisClient");
(function connectToRedis() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!redisClient_1.client.isOpen) {
            try {
                yield redisClient_1.client.connect();
                console.log("Connected to Redis");
                app_1.app.listen(process.env.SERVER_PORT || 8000, () => {
                    console.log(`⚙️ Server is running at port : ${process.env.SERVER_PORT}`);
                });
            }
            catch (error) {
                console.error("Error connecting to Redis:", error);
            }
        }
    });
})();
