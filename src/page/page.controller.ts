import { Get, Controller, Render, Body } from '@nestjs/common';

@Controller('api/pages')
export class PageController {

  @Get('lcm-meals')
  @Render('page')
  root() {

  }

  @Post('sign')
  sign(@Body() request: SignPageRequest) {

  }
}

class SignPageRequest {
  readonly slug: string;
  readonly lName: string;
  readonly fName: string;
  readonly email: string;
}
