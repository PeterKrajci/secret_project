import mongoose from "mongoose";

export const commentSchema = mongoose.Schema({
  comments: [{ body: String, date: Date }],
});

export const commentModel = mongoose.model("comment", commentSchema);
