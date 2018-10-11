import { Connection } from 'mongoose';

import { MongoDbConnectionToken, CommentModelToken } from 'common/constants';
import { CommentSchema } from 'common/database/schemas/comment.schema';

export const CommentModelProvider = {
  provide: CommentModelToken,
  useFactory: (connection: Connection) => connection.model('Comment', CommentSchema),
  inject: [MongoDbConnectionToken],
};
