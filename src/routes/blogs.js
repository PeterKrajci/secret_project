import express from "express";
import { param, validationResult } from "express-validator";

import services from "../services";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on blogs");
});

router.post("/", (req, res) => {
  console.log(req.body);
});

router.get(
  "/:id",
  param("id")
    .isLength({ min: 24, max: 24 })
    .withMessage("Error: Invalid ID length!"),
  services.blogs.getBlogById
);

export default router;
