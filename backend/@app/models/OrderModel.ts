import mongoose, { Schema } from 'mongoose';
import { Order, Address } from '../../@types/index';
const { String, Array, Mixed, Number, ObjectId, Date } = Schema.Types


const orderSchema = new mongoose.Schema<Order>({
 items: {
  item: { type: ObjectId, required: true },
  quantity: { type: Number, required: true },
 },
 cost: {
  amount: { type: Number },
  tax: { type: Number },
  shipping: { type: Number },
 },
 shipping: {
  cost: { type: Number, required: true },
  address: {
   street: { type: String, requried: true },
   city: { type: String, requried: true },
   postalCode: { type: String, requried: true },
   country: { type: String, requried: true },
  },
 },
 payment: {
  session: { type: String },
  method: { type: String, required: true },
  checkout_url: { type: String, required: true },
  status: { type: String, required: true },
 },
 buyer: { type: ObjectId, ref: "User", required: true },
 seller: { type: ObjectId, ref: "User", required: true },
 meta: { type: Mixed },
 paid: { type: Boolean, required: true, default: false },
 paidAt: { type: Date },
 delivered: { type: Boolean, required: true, default: false },
 deliveredAt: { type: Date }
}, {
 timestamps: true
});

export const OrderModel = mongoose.model<Order>('Order', orderSchema);
