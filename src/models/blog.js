import mongoose from "mongoose";

export const blogSchema = mongoose.Schema({
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
    originalName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Uploaded file must have a name"],
    },
  },
});

export const blogModel = mongoose.model("blogs", blogSchema);
