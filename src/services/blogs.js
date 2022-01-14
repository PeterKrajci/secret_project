import { validationResult } from "express-validator";
import { blogModel } from "../models/blog";

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
    const updatedBlog = await blogModel.findByIdAndUpdate(
      blogId,
      updates,
      options
    );

    if (updatedBlog) {
      res.send(`You've succsesfully updated blog with id: ${blogId}`);
    } else {
      res.send(
        `There was some error during updating the blog with id: ${blogId}`
      );
    }
  } catch (error) {
    req.log.error(error);
    res.sendStatus(500);
    res.send("Error!");
  }
};

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

//inserting new blog to DB

const addBlog = async (req, res) => {
  try {
    const validationResults = validationResult(req);

    if (validationResults.isEmpty()) {
      const blog = new blogModel({
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
  }
};

// Function find all blogs in collection and send them as response
const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await blogModel.find({});

    req.log.info("Success");
    res.status(200).send(allBlogs);
  } catch (error) {
    req.log.error(error);
    res.sendStatus(500);
  }
};

// Function find and delete blog from collection by id
const deleteBlogById = async (req, res) => {
  try {
    const validationResults = validationResult(req);
    const idOfBlog = req.params.id.toString().trim();

    if (!validationResults.isEmpty()) {
      req.log.error(validationResults);
      res.status(400).send(validationResults);

      return;
    }

    // trying to delete blog from collection
    const deletedBlog = await blogModel.findByIdAndRemove(idOfBlog).exec();

    if (deletedBlog == null) {
      const blogNotFoundMsg = `Blog with id "${idOfBlog}" is not found...`;

      req.log.error(blogNotFoundMsg);
      res.status(404).send(blogNotFoundMsg);

      return;
    }

    const successMsg = `You've succsesfully deleted blog with id: ${req.params.id}`;

    req.log.info(successMsg);
    res.status(200).send(successMsg);
  } catch (error) {
    req.log.error(error);
    res.sendStatus(500);
  }
};

export default {
  deleteBlogById,
  getAllBlogs,
  addBlog,
  getBlogById,
  editBlogById,
};
