import mongoose from "mongoose";

export const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
  },
  text: {
    type: String,
    required: true,
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
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
