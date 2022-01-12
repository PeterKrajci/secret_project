import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  comments: [{ body: String, date: Date }],
  date: {
    type: Date,
    default: Date.now,
  },
  likes: Number,
  img: {
    data: Buffer,
    contentType: String,
  },
});

export const blogModel = mongoose.model("blogs", blogSchema);

export default blogModel;
