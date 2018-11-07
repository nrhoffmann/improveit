import { Test, TestingModule } from '@nestjs/testing';

import { PagesController } from './pages.controller';
import { PageService } from './page.service';

describe('Pages Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PagesController],
      providers: [PageService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PagesController = module.get<PagesController>(PagesController);
    expect(controller).toBeDefined();
  });
});
