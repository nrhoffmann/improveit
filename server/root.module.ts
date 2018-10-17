import { Module } from '@nestjs/common';

import { PageModule } from 'server/pages/page.module';
import { ContributorModule } from 'server/contributors/contributor.module';
import { AppModule } from 'server/app/app.module';

@Module({
  imports: [
    // PageModule,
    ContributorModule,
    AppModule,
  ],
})
export class RootModule {}
