import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      en: String,
      km: String,
    },
    content: {
      en: String,
      km: String,
    },
    preview: {
      en: String,
      km: String,
    },
    category: {
      en: String,
      km: String,
    },
    date: String,
    readTime: Number,
    image: String,
    views: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
