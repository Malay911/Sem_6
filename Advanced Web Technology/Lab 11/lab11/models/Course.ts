import mongoose, { Schema, models } from "mongoose";

const CourseSchema = new Schema({
  title: String,
  duration: String,
  fees: Number,
});

export default models.Course || mongoose.model("Course", CourseSchema);