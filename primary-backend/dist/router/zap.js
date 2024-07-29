"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zapRouter = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router.post('/', middleware_1.authMiddleware, (req, res) => {
    console.log('create a zap');
});
router.get('/', middleware_1.authMiddleware, (req, res) => {
    console.log('get the zaps');
});
router.get('/:zapId', middleware_1.authMiddleware, (req, res) => {
    console.log('get the zapId');
});
exports.zapRouter = router;
