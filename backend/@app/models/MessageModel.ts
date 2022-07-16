import mongoose, { Schema } from 'mongoose';
import { Message } from '../../@types/index';
const { String, Array, ObjectId } = Schema.Types


const messageSchema = new mongoose.Schema<Message>({
 text: { type: String, required: true },
 by: { type: ObjectId, required: true },
 to: { type: ObjectId, required: true },
 attachment: { type: ObjectId },
 team: { type: String, enum: ["support", "dev", "sales", "legal"], required: true },
}, {
 timestamps: true
});

export const MessageModel = mongoose.model<Message>('Message', messageSchema);
