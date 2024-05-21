import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const port = 3201;
  Logger.log('Before app.listen', 'Bootstrap');
  await app.listen(port);
  Logger.log(
    `Application is running on: http://localhost:${port}`,
    'Bootstrap',
  );
  Logger.log(`JWT_SECRET: ${process.env.JWT_SECRET}`, 'Bootstrap');
}
bootstrap();
