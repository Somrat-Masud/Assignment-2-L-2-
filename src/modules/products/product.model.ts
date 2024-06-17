import { model, Schema } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

const VarientSchema = new Schema<TVariant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});
const InventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },

  inStock: {
    type: Boolean,
    required: true,
  },
});

const ProductSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  tags: {
    type: [String],
  },
  variants: {
    type: [VarientSchema],
  },
  inventory: {
    type: [InventorySchema],
  },
});

export const Product = model<TProduct>("Product", ProductSchema);
