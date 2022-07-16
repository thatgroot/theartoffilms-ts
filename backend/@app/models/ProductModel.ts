import { model, Schema } from "mongoose";
import { Product } from "../../@types";
const { String, Number, Mixed, ObjectId } = Schema.Types

const productSchema = new Schema<Product>({
 sku: { type: String, required: true },
 name: { type: String, required: true },
 description: { type: String },
 price: { type: Number, required: true },
 brand: {
  type: Array<{ type: ObjectId, ref: "Taxanomy" }>,
 },
 categories: {
  type: Array<{ type: ObjectId, ref: "Taxanomy" }>,
 },
 tags: {
  type: Array<{ type: ObjectId, ref: "Taxanomy" }>,
 },
 media: {
  featured: { type: ObjectId, required: true },
  images: { type: Array, },
 },
 visiblity: { type: String, enum: ["public", "private", "protected", "unlisted"], required: true },
 status: { type: String, enum: ["published", "unpublished", "draft", "archived"], required: true },
 meta: {
  billable: { type: Boolean, required: true, default: false },
  amount: { type: Number, required: true },
 },
}, {
 timestamps: true
});

// 3. Create a Model.
export const ProductModel = model<Product>("Product", productSchema);
