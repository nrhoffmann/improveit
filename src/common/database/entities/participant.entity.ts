import { Schema, Document, Connection } from 'mongoose';

import { ParticipantModelToken, ConnectionToken } from 'common/constants';

const ParticipantSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    alias: 'firstName',
  },
  last_name: {
    type: String,
    trim: true,
    alias: 'lastName',
  },
  email: {
    type: String,
    trim: true,
  },
});

export interface Participant {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ParticipantDocument extends Document {
  // declare schema methods here
}

export const ParticipantModelProvider = {
  provide: ParticipantModelToken,
  useFactory: (connection: Connection) => connection.model('Participant', ParticipantSchema),
  inject: [ConnectionToken],
};