import { Get, Controller, Render, Body, Param } from '@nestjs/common';
import { PageService } from './page.service';

@Controller('pages')
export class PageController {

  constructor(private readonly pages: PageService) {}

  @Get(':slug')
  single(@Param('slug') slug: string) {
    return this.pages.findBySlug(slug);
  }
}
