import Next from 'next';
import { NestFactory } from '@nestjs/core';

import { RootModule } from 'server/root.module';
import { RenderService } from 'server/app/render.service';
import { RenderMiddleware } from 'server/app/render.middleware';
import { RenderFilter } from 'server/app/render.filter';

async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = Next({ dev });

  await app.prepare();

  const server = await NestFactory.create(RootModule);
  const renderingService = server.get(RenderService);

  renderingService.setRequestHandler(app.getRequestHandler());
  renderingService.setRenderer(app.render.bind(app));

  renderingService.bindHttpServer(server.getHttpAdapter());

  server.use((new RenderMiddleware(renderingService).resolve()));
  server.useGlobalFilters(new RenderFilter(renderingService.getRequestHandler()!));

  await server.listen(3000);
}
bootstrap();
