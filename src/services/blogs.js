import Blog from "../models/blog";
import { param, validationResult } from "express-validator";

// find and update blog by ID

const editBlogById = async (req, res) => {
  try {
    //const validationResults = validationResult(req);
    const blogId = req.param.id.toString().trim();
    const updates = req.body;

    // if (!validationResults.isEmpty()) {
    //   res.status(400).send(`"${blogId}" is not a valid blogID value`);

    //   return;

    await Blog.findByIdAndUpdate(blogId, updates);

    res
      .status(200)
      .send(`You've succsesfully updated blog with id: ${req.params.id}`);
  } catch (error) {
    res.sendStatus(500);
    res.send("Error!");
    console.log(error);
  }
};

export default { editBlogById };
