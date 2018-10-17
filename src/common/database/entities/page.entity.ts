import { Schema, Document, Connection } from 'mongoose';

import { ConnectionToken, PageModelToken } from 'common/constants';

const PageSchema = new Schema({
  slug: {
    type: String,
    index: true,
    unique: true,
  },
}, { _id: false });

export interface Page {
  slug: string;
}

export interface PageDocument extends Document {
  // declare schema methods here
}

export const PageModelProvider = {
  provide: PageModelToken,
  useFactory: (connection: Connection) => connection.model('Page', PageSchema),
  inject: [ConnectionToken],
};
