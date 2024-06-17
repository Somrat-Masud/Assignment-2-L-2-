import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const createData = req.body;
  const result = await ProductServices.createProduct(createData);
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "could not factch Product",
      error: err,
    });
  }
};
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getProductById(productId);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "could not factch Product",
      error: err,
    });
  }
};

//update section
const updateProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    console.log(productId);
    const updatedData = req.body;
    const result = await ProductServices.updateProductById(updatedData);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "could not factch Product",
      error: err,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
};
