import { Test, TestingModule } from '@nestjs/testing';

import { PageService } from './page.service';

describe('PageService', () => {
  let service: PageService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PageService],
    }).compile();
    service = module.get<PageService>(PageService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
