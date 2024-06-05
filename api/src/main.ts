import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const port = 3000;

  app.enableCors({
    origin: 'http://localhost:3202',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(port);
  Logger.log(`process.env: ${process.env.JWT_SECRET}`);
  Logger.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
