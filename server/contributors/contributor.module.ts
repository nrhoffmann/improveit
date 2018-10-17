import { Module } from '@nestjs/common';
import { ContributorController } from './contributor.controller';

@Module({
  controllers: [ContributorController],
})
export class ContributorModule {}
