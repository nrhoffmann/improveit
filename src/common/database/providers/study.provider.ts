import { Connection } from 'mongoose';

import { MongoDbConnectionToken, StudyModelToken } from 'common/constants';
import { StudySchema } from 'common/database/schemas/study.schema';

export const StudyModelProvider = {
  provide: StudyModelToken,
  useFactory: (connection: Connection) => connection.model('Study', StudySchema),
  inject: [MongoDbConnectionToken],
};
