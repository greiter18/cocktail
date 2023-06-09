import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

export const User = mongoose.model("User", UserSchema);