import mongoose, { Schema } from 'mongoose';
import { User } from '../../@types/index';
const { String, Map } = Schema.Types


const userSchema = new mongoose.Schema<User>({
 name: { type: String, required: true },
 email: { type: String, required: true },
 password: { type: String, required: true },
 role: { type: String, required: true, enum: ["admin", "seller", "editor", "modirator", "user", "customer"] },
 address: {
  street: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
 },
 meta: { type: Map }
}, {
 timestamps: true
});

export const UserModel = mongoose.model<User>('User', userSchema);
