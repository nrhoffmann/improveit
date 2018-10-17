import { Schema, Document, Connection } from 'mongoose';

import { SignatureModelToken, ConnectionToken } from 'common/constants';

const SignatureSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    alias: 'firstName',
    required: true,
  },
  last_name: {
    type: String,
    trim: true,
    alias: 'lastName',
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  page_slug: {
    type: String,
    required: true,
  },
});

export interface Signature {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface SignatureDocument extends Document {
  // declare schema methods here
}

export const SignatureModelProvider = {
  provide: SignatureModelToken,
  useFactory: (connection: Connection) => connection.model('Signature', SignatureSchema),
  inject: [ConnectionToken],
};