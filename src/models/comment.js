import mongoose from "mongoose";

export const commentSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
  },
  text: String,
  date: Date,
});

export const commentModel = mongoose.model("comment", commentSchema);
