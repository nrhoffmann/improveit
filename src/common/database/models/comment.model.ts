import { Document, Model } from 'mongoose';
import { ObjectId } from 'bson';

interface Comment extends Document {
  readonly value: string;
  readonly meta: {
    readonly created_at: Date,
    readonly participant_id: ObjectId;
    readonly study_id: ObjectId;
  };
}

export type CommentModel = Model<Comment>;