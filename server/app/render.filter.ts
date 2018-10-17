import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { parse } from 'url';

import { RequestHandler } from './types';

@Catch()
export class RenderFilter implements ExceptionFilter {
  private readonly requestHandler: RequestHandler;

  constructor(requestHandler: RequestHandler) {
    this.requestHandler = requestHandler;
  }

  /**
   * Nest isn't aware of how next handles routing for the build assets, let next
   * handle routing for any request that isn't handled by a controller
   * @param err
   * @param ctx
   */
  public catch(err: any, ctx: ArgumentsHost) {
    const [ req, res ] = ctx.getArgs();

    const parsedUrl = parse(req.url, true);
    return this.requestHandler(req, res, parsedUrl);
  }
}
