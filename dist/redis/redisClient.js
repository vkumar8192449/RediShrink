"use strict";
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
