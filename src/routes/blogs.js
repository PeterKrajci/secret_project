import express from "express";
import { param, validationResult } from "express-validator";

import services from "../services";

const router = express.Router();

router.put("/:id", param("id").isLength(24), services.blogs.editBlogById);

export default router;
