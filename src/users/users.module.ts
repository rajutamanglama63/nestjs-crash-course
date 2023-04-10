import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { ExampleMiddlewareMiddleware } from './middlewares/example-middleware/example-middleware.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddlewareMiddleware).forRoutes(
      {
      path: "users",
      method: RequestMethod.GET
      },
      {
        path: "/users/:id",
        method: RequestMethod.GET
      }
    )
  }
}
