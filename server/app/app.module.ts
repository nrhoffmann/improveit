import { Module } from '@nestjs/common';

import { RenderService } from './render.service';
import { AppController } from './app.controller';

@Module({
  providers: [RenderService],
  controllers: [AppController],
})
export class AppModule {}
