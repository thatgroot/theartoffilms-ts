import { model, Schema } from 'mongoose';
import { Media } from '../../@types/index';
const { String } = Schema.Types

const mediaSchema = new Schema<Media>({
 type: { type: String, enum: ['video', 'image', 'audio', 'document'], required: true },
 name: { type: String, required: true },
 link: { type: String, required: true },
 caption: { type: String, required: true }
}, {
 timestamps: true
});

// 3. Create a Model.
export const MediaModel = model<Media>("Media", mediaSchema);
