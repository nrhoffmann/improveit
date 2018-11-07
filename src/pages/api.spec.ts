import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { mock, instance, when } from 'ts-mockito';
import { RouterModule } from 'nest-router';

import { PagesModule } from './pages.module';
import { PageService } from './page.service';
import { PageRoutes } from './page.routes';
import { RootModule } from '../root.module';

describe('Page API', () => {
  let app: INestApplication;
  const mockPageService: PageService = mock(PageService);

  beforeAll(async () => {
    const mod = await Test.createTestingModule({
      imports: [
        RootModule,
      ],
    })
      .overrideProvider(PageService)
      .useClass(class implements PageService {
        exists(slug: string): boolean {
          switch (slug) {
            case 'non-existent-page':
              return false;
            case 'example-page':
              return true;
          }

          throw new Error('Method not implemented.');
        }
      })
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

    it('when :slug cannot be found', () => {
      return request(app.getHttpServer())
        .get('/pages/non-existent-page')
        .expect(404);
    });

    it('when :slug can be found', () => {
      return request(app.getHttpServer())
        .get('/pages/example-page')
        .expect(200)
        .expect({
          slug: 'example-page',
          signatures: '/pages/example-page/signatures',
        });
    });
  });

  afterAll(async () => {
    await app.close();
  });
});