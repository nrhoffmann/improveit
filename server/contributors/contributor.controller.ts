import { Get, Controller, Render, Post, Res, HttpCode } from '@nestjs/common';
import { Response } from 'express';

@Controller('api/contributor')
export class ContributorController {

  @Post()
  @HttpCode(201)
  create(): string {
    return 'Hello from create.';
  }

  @Post('lcm-meals')
  post(@Res() res: Response) {
    res.redirect('/lcm-meals/ideas?cid=123456789');
  }
}
