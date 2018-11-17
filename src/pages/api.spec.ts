import { INestApplication } from '@nestjs/common';
import { Test as Testing } from '@nestjs/testing';
import { agent, Test } from 'supertest';

import { PageService } from './page.service';
import { RootModule } from '../root.module';

describe('Page API', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const mod = await Testing.createTestingModule({
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

  describe('[GET] /pages', () => {
    let req: Test;

    beforeAll(() => {
      req = agent(app.getHttpServer())
        .get('/pages');
    });
    it('should have status code 200', () => {
      req.expect(200);
    });
  });

  describe('[GET] /pages/:slug', () => {

    describe('when :slug cannot be found', () => {
      let req: Test;

      beforeAll(() => {
        req = agent(app.getHttpServer())
          .get('/pages/non-existent-page');
      });
      it('should have status code 404', () => {
          req.expect(404);
      });
    });

    describe('when :slug can be found', () => {
      let req: Test;

      beforeAll(() => {
        req = agent(app.getHttpServer())
        .get('/pages/example-page');
      });
      it('should have status code 200', () => {
          req.expect(200);
      });
      it('should contain slug', () => {
        req.expect({
          slug: 'example-page',
        });
      });
      it('should contain path to its signatures', () => {
        req.expect({
          signatures: '/pages/example-page/signatures',
        });
      });
    });
  });

  afterAll(async () => {
    await app.close();
  });
});