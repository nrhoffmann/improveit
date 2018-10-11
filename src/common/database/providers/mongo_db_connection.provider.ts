import * as mongoose from 'mongoose';
import { MongoDbConnectionToken } from 'common/constants';

export const MongoDbConnectionProvider = {
  provide: MongoDbConnectionToken,
  useFactory: async (): Promise<typeof mongoose> =>
  await mongoose.connect('mongodb://localhost/nest'),
};