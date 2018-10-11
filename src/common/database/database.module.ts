import { Module } from '@nestjs/common';

import { MongoDbConnectionProvider } from './providers/mongo_db_connection.provider';
import { ParticipantModelProvider } from './providers/participant.provider';
import { StudyModelProvider } from './providers/study.provider';
import { CommentModelProvider } from './providers/comment.provider';

@Module({
  providers: [
    MongoDbConnectionProvider,
    ParticipantModelProvider,
    StudyModelProvider,
    CommentModelProvider,
  ],
  exports: [
    ParticipantModelProvider,
    StudyModelProvider,
    CommentModelProvider,
  ],
})
export class DatabaseModule {}