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
