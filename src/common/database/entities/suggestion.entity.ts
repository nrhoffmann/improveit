import { Schema, Document, Connection } from 'mongoose';

import { ConnectionToken, SuggestionModelToken } from 'common/constants';

const SuggestionSchema = new Schema({
  text: {
    type: String,
    trim: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
    alias: 'createdAt',
  },
});

export interface Suggestion {
  id: string;
  text: string;
  createdAt: Date;
}

export interface SuggestionDocument extends Document {
  // declare schema methods here
}

export const SuggestionModelProvider = {
  provide: SuggestionModelToken,
  useFactory: (connection: Connection) => connection.model('Suggestion', SuggestionSchema),
  inject: [ConnectionToken],
};
