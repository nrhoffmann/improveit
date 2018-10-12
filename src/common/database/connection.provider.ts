import * as mongoose from 'mongoose';
import { ConnectionToken } from 'common/constants';

export const ConnectionProvider = {
  provide: ConnectionToken,
  useFactory: async (): Promise<typeof mongoose> =>
  await mongoose.connect('mongodb://localhost/nest'),
};