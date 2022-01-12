import express from "express";
import { param, body } from "express-validator";

import services from "../services";

const router = express.Router();

router.put(
  "/:id",
  param("id").isLength({ min: 3, max: 50 }),
  body("text").not().isEmpty(),
  body("title").not().isEmpty(),
  services.blogs.editBlogById,)

router.post(
  "/",
  body("title")
    .isLength({ min: 3, max: 80 })
    .withMessage(
      "The length of the title must be min 3 and max 80 characters."
    ),
  services.blogs.addBlog),

router.get("/", services.blogs.getAllBlogs),

router.delete(
  "/:id",
  param("id")
    .isLength({ min: 24, max: 24 })
    .withMessage(`Not a valid blogID value`),
  services.blogs.deleteBlogById
),

router.get(
  "/:id",
  param("id")
    .isLength({ min: 24, max: 24 })
    .withMessage("Error: Invalid ID length!"),
  services.blogs.getBlogById
)

export default router;
