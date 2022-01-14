import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  comments: [{ body: String, date: Date }],
});

export const commentModel = mongoose.model("comments", commentSchema);
