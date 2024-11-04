"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const redirect_controller_1 = require("../controllers/redirect.controller");
const router = (0, express_1.Router)();
router.route("/:redirect").get(redirect_controller_1.redirect);
exports.default = router;
