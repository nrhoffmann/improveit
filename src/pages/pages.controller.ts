import { Controller, Get, Inject, Param, NotFoundException } from '@nestjs/common';

import { PageService } from './page.service';
import { Page } from './page';

@Controller('pages')
export class PagesController {
  constructor(private readonly pages: PageService) {}

  @Get()
  all(): Page[] {
    return[];
  }

  @Get('/:slug')
  single(@Param('slug') slug: string): Page {
    if (! this.pages.exists(slug))
      throw new NotFoundException();

    return {slug};
  }
}
