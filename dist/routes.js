"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const homepage_1 = require("./app/routes/homepage");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", homepage_1.router);
