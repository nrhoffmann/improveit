import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

import { RenderService } from './render.service';

@Injectable()
export class RenderMiddleware implements NestMiddleware {

  constructor(private readonly renderService: RenderService) {}

  /**
   * Set the current req and res in our render service
   * @param args
   */
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      this.renderService.next(req, res);
      if (next) {
        next();
      }
    };
  }
}
