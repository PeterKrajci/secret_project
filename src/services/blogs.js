import Blog from "../models/blog";
import { param, validationResult } from "express-validator";

//inserting new blog to DB

const addBlog = async (req, res) => {
  try {
    const validationResults = validationResult(req);

    if (validationResults.isEmpty()) {
      const blog = new Blog({
        title: req.body.title,
        author: req.body.author,
        text: req.body.text,
      });

      await blog.save();

      res.status(200);
      res.json(blog);
    } else {
      req.log.info(`validation error value: ${validationResults}`);
      res.status(400);
      res.send("validationError");
      res.send(validationResults);
    }
  } catch (error) {
    req.log.error(error);
    res.sendStatus(500);
    res.send("Error!");
  }
};

export default { addBlog };
