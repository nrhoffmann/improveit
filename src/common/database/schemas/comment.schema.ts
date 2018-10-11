import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

export const CommentSchema = new Schema({
  value: {
    type: String,
    trim: true,
  },
  meta: {
    created_at: {
      type: Date,
      default: Date.now,
    },
    participant_id: ObjectId,
    study_id: ObjectId,
  },
});