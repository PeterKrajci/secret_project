import Blog from "../models/blog";
import { validationResult } from "express-validator";

// Function find all blogs in collection and send them as response
const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({});

    res.status(200).send(allBlogs);
  } catch (error) {
    res.status(500).send("My bad bro ._.");
  }
};

// Function find and delete blog from collection by id
const deleteBlogById = async (req, res) => {
  try {
    const validationResults = validationResult(req);
    const idOfBlog = req.params.id.toString().trim();

    if (!validationResults.isEmpty()) {
      res.status(400).send(`"${idOfBlog}" is not a valid blogID value`);

      return;
    }

    //deleting blog from collection
    await Blog.findByIdAndRemove(idOfBlog).exec();

    res
      .status(200)
      .send(`You've succsesfully deleted blog with id: ${req.params.id}`);
  } catch (error) {
    res.status(500).send(`My bad bro ._.`);

    console.log(error);
  }
};

export default { deleteBlogById, getAllBlogs };
