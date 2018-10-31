import { Injectable } from '@nestjs/common';
import { Page } from './page';

@Injectable()
export class PageService {
  exists(slug: string): boolean {
    return false;
  }
}
