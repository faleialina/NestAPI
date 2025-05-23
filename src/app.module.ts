import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, AuthModule, OrdersModule],
})
export class AppModule {}
