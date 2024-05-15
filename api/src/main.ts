import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  await app.listen(3201);
  console.log(`NestJS Application is running on: ${await app.getUrl()}`);
}
bootstrap();
