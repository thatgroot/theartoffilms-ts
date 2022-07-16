import mongoose, { Schema } from 'mongoose';
import { Settings } from '../../@types/index';
const { String, Array } = Schema.Types


const settingsSchema = new mongoose.Schema<Settings>({
 site: {
  name: { type: String, required: true },
  logo: { type: String },
  favicon: { type: String },
  keywords: { type: Array<String> }
 }
}, {
 timestamps: true
});

export const SettingsModel = mongoose.model<Settings>('Settings', settingsSchema);
