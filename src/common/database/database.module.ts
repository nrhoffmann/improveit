import { Module } from '@nestjs/common';

import { ConnectionProvider } from './connection.provider';
import { ParticipantModelProvider } from './entities/participant.entity';
import { StudyModelProvider } from './entities/study.entity';
import { CommentModelProvider } from './entities/comment.entity';

@Module({
  providers: [
    ConnectionProvider,
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