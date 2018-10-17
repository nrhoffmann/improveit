import { Get, Controller, Render, Param } from '@nestjs/common';
@Controller()
export class AppController {

  @Get()
  @Render('index')
  root() {

  }

  @Get(':slug')
  @Render('page')
  page(@Param('slug') slug) {
    return {
      slug,
    };
  }
}