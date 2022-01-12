import Blog from "../models/blog";
import { param, body, validationResult } from "express-validator";

// find and update blog by ID

const editBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const validationResults = validationResult(req);

    if (!validationResults.isEmpty()) {
      res.status(400).send(validationResults);

      return;
    }

    const updates = req.body;
    const options = { new: true };
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, updates, options);

    if (updatedBlog) {
      res.send(`You've succsesfully updated blog with id: ${blogId}`);
    } else {
      res.send(
        `There was some error during updating the blog with id: ${blogId}`
      );
    }
  } catch (error) {
    res.sendStatus(500);
    res.send("Error!");
    console.log(error);
  }
};

export default { editBlogById };
