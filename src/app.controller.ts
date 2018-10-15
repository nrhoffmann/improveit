import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // @Render('petition')
  // root() {
  //   // return { message: 'Hello, World!'};
  // }
}
