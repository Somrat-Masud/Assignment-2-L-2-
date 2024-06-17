import express from "express";

import { productController } from "./product.controller";
const router = express.Router();

//Create a New Product
router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getProductById);
//update section
router.put("/products/:productId", productController.updateProductById);

export const ProductRoutes = router;
