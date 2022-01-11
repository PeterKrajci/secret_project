import express from "express";
import { param } from "express-validator";

import services from "../services";

const router = express.Router();

router.get("/", services.blogs.getAllBlogs);

router.delete(
  "/:id",
  param("id")
    .isLength({ min: 24, max: 24 })
    .withMessage(`Not a valid blogID value`),
  services.blogs.deleteBlogById
);

export default router;
