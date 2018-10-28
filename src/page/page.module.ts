import { Module } from '@nestjs/common';
import { PageController } from './page.controller';
import { InMemoryPageService } from '@tests/page-service.mock';
import { PageService } from './page.service';

@Module({
  providers: [
    {
      provide: PageService,
      useClass: InMemoryPageService,
    },
  ],
  controllers: [PageController],
})
export class PageModule {}
