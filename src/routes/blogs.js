import express from "express";
import { param, body } from "express-validator";

import services from "../services";

const router = express.Router();

router.post(
  "/",
  body("title")
    .isLength({ min: 3, max: 80 })
    .withMessage(
      "The length of the title must be min 3 and max 80 characters."
    ),
  services.blogs.addBlog)

router.get("/", services.blogs.getAllBlogs);

router.delete(
  "/:id",
  param("id")
    .isLength({ min: 24, max: 24 })
    .withMessage(`Not a valid blogID value`),
  services.blogs.deleteBlogById
);

export default router;
