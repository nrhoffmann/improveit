import { Module } from '@nestjs/common';
import { PagesController } from './pages.controller';
import { PageService } from './page.service';
import { SignaturesModule } from './signatures/signatures.module';

@Module({
  controllers: [PagesController],
  providers: [PageService],
  imports: [SignaturesModule],
})
export class PagesModule {}
