import Blog from "../models/blog";
import { param, validationResult } from "express-validator";

//adding new blog

const addBlog = async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      author: req.body.author,
      text: req.body.text,
    });

    await blog.save();

    res.status(200);
    res.json(blog);
  } catch (error) {
    res.sendStatus(500);
    res.send("Error!");
    console.log(error);
  }
};

export default { addBlog };

// const blog = await Blog.create({
//   title: req.body.title,
//   author: req.body.author,
//   text: req.body.text,
// req.log.error(error)
