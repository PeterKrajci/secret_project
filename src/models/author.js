import mongoose, { Schema } from "mongoose";

export const authorSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
});

export const authorModel = mongoose.model("author", authorSchema);
