import { PageService } from '@server/page/page.service';
import { Page } from '@server/page/page';

export class InMemoryPageService implements PageService {
  private pages: Page[] = [
    {
      slug: 'test-page',
      title: 'A Clever Title Goes Here.',
    },
  ];

  findBySlug(slug: string): Page {
    return this.pages.find(page => page.slug === slug);
  }
}