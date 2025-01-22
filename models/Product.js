import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, // ✅ `required` is inside `{ type: String }`
  qty: { type: String, required: false }, // ✅ Fix: Correct schema structure
});
const Product = mongoose.model("Product", productSchema);
export default Product;
