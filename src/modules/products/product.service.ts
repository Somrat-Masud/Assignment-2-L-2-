import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};
const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};
const getProductById = async (id: string) => {
  const result = await Product.findById({ _id: id });
  return result;
};
//update section
const updateProductById = async (id: string) => {
  const result = await Product.updateOne({ _id: id });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
};
