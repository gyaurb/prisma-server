"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = require("../controllers/postController");
const router = express_1.default.Router();
router.get('/read', postController_1.readPost);
router.post('/add', postController_1.addPost);
router.put('/edit/:id', postController_1.editPost);
router.delete('/delete/:id', postController_1.deletePost);
exports.default = router;
