const mongoose = require("mongoose");

const galleryItemSchema = new mongoose.Schema({
  src: String,
  label: {
    en: String,
    km: String,
  },
});

const plantingInfoSchema = new mongoose.Schema({
  distance: {
    en: String,
    km: String,
  },
  plantDistance: {
    en: String,
    km: String,
  },
  density: {
    en: String,
    km: String,
  },
});

const productVariantSchema = new mongoose.Schema({
  src: String,
  title: {
    en: String,
    km: String,
  },
  info: {
    en: String,
    km: String,
  },
  weight: String,
  views: Number,
  pdfUrl: String,
  gallery: [galleryItemSchema],
  features: {
    en: [String],
    km: [String],
  },
  planting: plantingInfoSchema,
  landPreparation: {
    en: [String],
    km: [String],
  },
  cultivation: {
    en: [String],
    km: [String],
  },
  irrigation: {
    en: [String],
    km: [String],
  },
});

const productSchema = new mongoose.Schema({
  productKey: { type: String, required: true, unique: true },
  name: {
    en: { type: String, required: true },
    km: { type: String, required: true },
  },
  desc: {
    en: { type: String, required: true },
    km: { type: String, required: true },
  },
  imgs: [productVariantSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
