import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { check } from './middelwares';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.use(check);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
