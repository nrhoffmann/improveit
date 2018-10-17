import { Get, Controller, Render, Post, Res } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('index')
  root() {

  }
}