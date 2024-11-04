"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)()); // Parse cookies
const shrink_routes_1 = __importDefault(require("./routes/shrink.routes"));
const redirect_routes_1 = __importDefault(require("./routes/redirect.routes"));
const stats_routes_1 = __importDefault(require("./routes/stats.routes"));
//routes declaration
app.use("/api/shrink", shrink_routes_1.default);
app.use("/api/stats", stats_routes_1.default);
app.use("/", redirect_routes_1.default);
