import Product from "../models/Product.js";

export const getProducts = async () => {
  return await Product.find();
};
