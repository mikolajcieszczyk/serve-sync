import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const port = 3201;
  await app.listen(port);
  Logger.log(`process.env: ${process.env.JWT_SECRET}`);
  Logger.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
