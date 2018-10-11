import { Document, Model } from 'mongoose';

interface Study extends Document {
  readonly name: string;
  readonly comments_enabled: boolean;
}

export type StudyModel = Model<Study>;