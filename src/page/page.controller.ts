import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class PageController {

  @Get('lcm-meals')
  @Render('page')
  root() {

  }
}
