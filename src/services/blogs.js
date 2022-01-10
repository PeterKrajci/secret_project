import mongoose from "mongoose";
import Blog from "../models/blog";

const deleteBlogById = async (req, res) => {
  try {
    const idOfBlog = req.params.id.toString().trim();

    await Blog.findByIdAndRemove(idOfBlog).exec();

    res
      .status(200)
      .send(`You've succsesfully deleted blog with id: ${req.params.id}`);
  } catch (error) {
    res.send(`Bad id bro ._.`);

    console.log(error);
  }
};

export default { deleteBlogById };
