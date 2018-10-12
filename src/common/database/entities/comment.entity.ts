import { Schema, Document, Connection } from 'mongoose';

import { ConnectionToken, CommentModelToken } from 'common/constants';

const { ObjectId } = Schema.Types;

const CommentSchema = new Schema({
  value: {
    type: String,
    trim: true,
  },
  meta: {
    created_at: {
      type: Date,
      default: Date.now,
      alias: 'createdAt',
    },
    participant_id: ObjectId,
    study_id: ObjectId,
  },
});

CommentSchema.virtual('meta.participantId').get(function() {
  return this.participant_id.toHexString();
});

CommentSchema.virtual('meta.studyId').get(function() {
  return this.study_id.toHexString();
});

export interface Comment {
  id: string;
  value: string;
  meta: {
    createdAt: Date,
    participantId: string;
    studyId: string;
  };
}

export interface StudyDocument extends Document {
  // declare schema methods here
}

export const CommentModelProvider = {
  provide: CommentModelToken,
  useFactory: (connection: Connection) => connection.model('Comment', CommentSchema),
  inject: [ConnectionToken],
};
