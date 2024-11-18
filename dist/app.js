"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)()); // Parse cookies
app.use((0, cors_1.default)({
    origin: (_a = process.env.ORIGIN) === null || _a === void 0 ? void 0 : _a.split(","),
    credentials: true,
}));
const shrink_routes_1 = __importDefault(require("./routes/shrink.routes"));
const redirect_routes_1 = __importDefault(require("./routes/redirect.routes"));
const stats_routes_1 = __importDefault(require("./routes/stats.routes"));
//routes declaration
app.use("/api/shrink", shrink_routes_1.default);
app.use("/api/stats", stats_routes_1.default);
app.get("/health-check", (req, res) => {
    res.status(200).json({ message: "ALL OK" });
});
app.use("/", redirect_routes_1.default);
