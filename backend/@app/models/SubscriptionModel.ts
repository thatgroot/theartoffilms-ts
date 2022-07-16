import mongoose, { Schema } from 'mongoose';
import { Subscription } from '../../@types/index';
const { String, Mixed, Number, ObjectId } = Schema.Types

const subscriptionSchema = new mongoose.Schema<Subscription>({
 title: { type: String, required: true },
 image: { type: ObjectId, required: true },
 limit: { type: Number, required: true },
 price: {
  validity: { type: Number, required: true },
 },
 perks: {
  type: Mixed,
 }
}, {
 timestamps: true
});

export const SubscriptionModel = mongoose.model<Subscription>('Subscription', subscriptionSchema);
