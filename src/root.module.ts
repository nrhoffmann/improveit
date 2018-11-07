import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { PagesModule } from './pages/pages.module';
import { RootRoutes } from './root.routes';

@Module({
  imports: [
    RouterModule.forRoutes(RootRoutes),
    PagesModule,
  ],
})
export class RootModule {}