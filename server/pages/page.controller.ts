import { Get, Controller, Render, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class PageController {

  @Get('lcm-meals')
  @Render('page')
  root() {

  }

  @Post('lcm-meals')
  post(@Res() res: Response) {
    res.redirect('/lcm-meals/ideas?cid=123456789');
  }
}
