import { Router } from "express";
import * as productController from "../controller/productController.js";

const router = Router();

router.get("/", productController.getAllProducts);

export default router;
