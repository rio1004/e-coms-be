import * as productService from "../service/productService.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to FETCH the Products" });
  }
};
