import { Schema } from 'mongoose';

export const StudySchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  comments_enabled: {
    type: Boolean,
  },
});