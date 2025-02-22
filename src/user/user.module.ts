import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { check } from 'src/middelwares';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  configure(test: MiddlewareConsumer) {
    test.apply(check).forRoutes(UserController);
    test.apply(check).forRoutes({ path: '/user', method: RequestMethod.GET });
  }
}
