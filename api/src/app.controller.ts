import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProtected(@Request() req): string {
    return `Hello ${req.user.username}`;
  }
}
