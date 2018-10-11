import { Connection } from 'mongoose';

import { MongoDbConnectionToken, ParticipantModelToken } from 'common/constants';
import { ParticipantSchema } from 'common/database/schemas/participant.schema';

export const ParticipantModelProvider = {
  provide: ParticipantModelToken,
  useFactory: (connection: Connection) => connection.model('Participant', ParticipantSchema),
  inject: [MongoDbConnectionToken],
};
