import { validationResult } from "express-validator";
import { blogModel } from "../models/blog";

const getBlogById = async (req, res) => {
  try {
    const validationResults = validationResult(req);
    if (validationResults.isEmpty()) {
      const idOfBlog = req.params.id;
      const blog = await blogModel.findById(idOfBlog).exec();

      if (blog == null) {
        const blogNotFoundMsg = `Blog with id: ${idOfBlog} was not found!`;

        req.log.info(blogNotFoundMsg);
        res.status(404).send(blogNotFoundMsg);
      } else {
        res.status(200).send(blog);
      }
    } else {
      req.log.info(validationResults);
      res.status(422).send("ValidationError");
    }
  } catch (error) {
    req.log.info(error);
    res.sendStatus(500);
  }
};

export default { getBlogById };
