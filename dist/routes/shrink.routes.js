"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shrink_controller_1 = require("../controllers/shrink.controller");
const router = (0, express_1.Router)();
router.route("/").post(shrink_controller_1.shrinkURL);
exports.default = router;
