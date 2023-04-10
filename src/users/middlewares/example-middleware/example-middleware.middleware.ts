import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ExampleMiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("Proof of middleware running.")
    next();
  }
}
