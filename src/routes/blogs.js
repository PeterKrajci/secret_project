import express from "express";
import { param, body } from "express-validator";

import services from "../services";

const router = express.Router();

router.put(
  "/:id",
  param("id").isLength({ min: 3, max: 50 }),
  body("text").not().isEmpty(),
  body("title").not().isEmpty(),
  services.blogs.editBlogById
);

export default router;
