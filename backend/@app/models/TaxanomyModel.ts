import mongoose, { Schema } from 'mongoose';
import { Taxanomy } from '../../@types/index';


const { String } = Schema.Types
const taxanomySchema = new mongoose.Schema<Taxanomy>({
 name: { type: String, required: true },
 type: { type: String, required: true },
}, {
 timestamps: true
});

export const TaxanomyModel = mongoose.model<Taxanomy>('Taxanomy', taxanomySchema);
