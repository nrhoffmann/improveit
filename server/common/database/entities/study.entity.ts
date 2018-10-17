import { Schema, Document, Connection } from 'mongoose';

import { ConnectionToken, StudyModelToken } from 'server/common/constants';

const StudySchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  comments_enabled: {
    type: Boolean,
    alias: 'commentsEnabled',
  },
});

export interface Study {
  id: string;
  name: string;
  commentsEnabled: boolean;
}

export interface StudyDocument extends Document {
  // declare schema methods here
}

export const StudyModelProvider = {
  provide: StudyModelToken,
  useFactory: (connection: Connection) => connection.model('Study', StudySchema),
  inject: [ConnectionToken],
};
