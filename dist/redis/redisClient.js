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
exports.client = void 0;
const redis_1 = require("redis");
exports.client = (0, redis_1.createClient)({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
            ? parseInt(process.env.REDIS_PORT, 10)
            : undefined,
        reconnectStrategy(retries) {
            if (retries >= 5) {
                console.log("Max retry attempts reached. Connection closed.");
                return false;
            }
            return 1000;
        },
    },
});
exports.client.on("error", (err) => console.log("Redis Client Error", err));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.client.connect();
        console.log("Connected to Redis");
    }
    catch (error) {
        console.error("Error connecting to Redis:", error);
    }
}))();
