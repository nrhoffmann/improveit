import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PageService } from './../src/page/page.service';
import { InMemoryPageService } from './page-service.mock';
import { PageModule } from '@server/page/page.module';

describe('Improveit API', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const builder = Test.createTestingModule({
      imports: [PageModule],
    });

    builder
      .overrideProvider(PageService)
      .useClass(InMemoryPageService);

    app = (await builder.compile()).createNestApplication();
    await app.init();
  });

  describe('/pages/test-page (GET)', () => {
    it('should return the test page', () => {
      return request(app.getHttpServer())
        .get('/pages/test-page')
        .expect(200)
        .expect({
          slug: 'test-page',
          title: 'A Clever Title Goes Here.',
        });
    });
  });

  describe('/pages/nonexistent-page (GET)', () => {
    it('should return not found', () => {
      return request(app.getHttpServer())
        .get('/page/nonexistent-page')
        .expect(404)
        .expect('Not Found');
    });
  });
});
