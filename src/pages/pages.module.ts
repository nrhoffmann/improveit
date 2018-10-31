import { Module } from '@nestjs/common';

import { PagesController } from './pages.controller';
import { PageService } from './page.service';

@Module({
  controllers: [PagesController],
  providers: [PageService],
})
export class PagesModule {}
