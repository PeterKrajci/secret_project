import { validationResult } from "express-validator";
import { blogModel } from "../models/blog";

const getBlogById = async (req, res) => {
  try {
    const validationResults = validationResult(req);
    const idOfBlog = req.params.id;

    if (!validationResults.isEmpty()) {
      req.log.error(validationResults);
      res.status(422).send("ValidationError");

      return;
    }
    const blog = await blogModel.findById(idOfBlog).exec();
    if (!blog) {
      const blogNotFoundMsg = `Blog with id: ${idOfBlog} was not found!`;

      req.log.error(blogNotFoundMsg);
      res.status(404).send(blogNotFoundMsg);

      return;
    }

    res.status(200).send(blog);
  } catch (error) {
    req.log.error(error);
    res.sendStatus(500);
  }
};

export default { getBlogById };
