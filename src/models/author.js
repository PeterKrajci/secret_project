import mongoose from "mongoose";

export const authorSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
});

export const authorModel = mongoose.model("author", authorSchema);
