import { Schema } from 'mongoose';

export const ParticipantSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
  },
  last_name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
});