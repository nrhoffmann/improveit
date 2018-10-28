import { Page } from './page';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class PageService {
  abstract findBySlug(slug: string): Page;
}