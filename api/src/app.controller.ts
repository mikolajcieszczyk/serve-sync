import { Controller, Get } from '@nestjs/common';
import { SkipAuth } from './auth/decorators/setMetadata.decorator';

@Controller()
@SkipAuth()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
