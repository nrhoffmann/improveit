import { Document, Model } from 'mongoose';

interface Participant extends Document {
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
}

export type ParticipantModel = Model<Participant>;