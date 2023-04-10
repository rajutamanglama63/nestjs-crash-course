import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ExampleMiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log("Proof of middleware running.")

    const authorization = req.headers["authorization"]

    if(!authorization) {
      throw new HttpException("Invalid token!!", HttpStatus.FORBIDDEN)
    }

    if(authorization === "12345asdf") {

      next();
    }
  }
}
