import express from "express";
import { param, validationResult } from "express-validator";

import services from "../services";

const router = express.Router();

router.post("/", services.blogs.addBlog);

export default router;
