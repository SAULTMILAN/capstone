import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: String,
    price: { type: Number, required: true, min: 0 },
    imageUrl: String,
    category: { type: String, index: true }, // women | men | jewelry | ...
    stock: { type: Number, default: 0 },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
