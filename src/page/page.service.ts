import { Injectable } from '@nestjs/common';
import { Page } from 'common/database/entities/page.entity';
import { Signature } from 'common/database/entities/signature.entity';

@Injectable()
export class PageService {
  private boundInstance: Page;
  
}
