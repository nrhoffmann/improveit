import { Module } from '@nestjs/common';

import { ConnectionProvider } from './connection.provider';
import { SignatureModelProvider } from './entities/signature.entity';
import { PageModelProvider } from './entities/page.entity';
import { SuggestionModelProvider } from './entities/suggestion.entity';

@Module({
  providers: [
    ConnectionProvider,
    SignatureModelProvider,
    PageModelProvider,
    SuggestionModelProvider,
  ],
  exports: [
    SignatureModelProvider,
    PageModelProvider,
    SuggestionModelProvider,
  ],
})
export class DatabaseModule {}