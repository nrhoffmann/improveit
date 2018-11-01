import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { mock, instance, when } from 'ts-mockito';

import { PagesModule } from './pages.module';
import { PageService } from './page.service';
import { Page } from './page';
import { PagesController } from './pages.controller';

describe('Page API', () => {
  let app: INestApplication;
  const mockPageService: PageService = mock(PageService);

  beforeAll(async () => {
    const mod = await Test.createTestingModule({
      imports: [PagesModule],
    })
      .overrideProvider(PageService)
      .useValue(instance(mockPageService))
      .compile();

    app = mod.createNestApplication();
    await app.init();
  });
  
  it('[GET] /pages', () => {
    return request(app.getHttpServer())
      .get('/pages')
      .expect(200);
  });

  describe('[GET] /pages/:slug', () => {
    beforeAll(() => {
      when(mockPageService.exists('non-existent-page')).thenReturn(false);
      when(mockPageService.exists('example-page')).thenReturn(true);
    });
    it('should return 4o4 when :slug cannot be found', () => {
      return request(app.getHttpServer())
        .get('/pages/non-existent-page')
        .expect(404);
    });

    it('should return 200 when :slug can be found', () => {
      return request(app.getHttpServer())
        .get('/pages/example-page')
        .expect(200);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});