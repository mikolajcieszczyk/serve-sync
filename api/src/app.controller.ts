import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  // @Get()
  // getHello(): string {
  //   return 'Hello World!';
  // }

  constructor(private readonly authService: AuthService) {}

  @Post('auth/register')
  async register(@Request() req) {
    return this.authService.register(req.body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  // @UseGuards(JwtAuthGuard)
  // @Get('protected')
  // getProtected(@Request() req): string {
  //   return `Hello ${req.user.username}`;
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req): any {
  //   console.log(req);
  //   return {
  //     user: req.user,
  //   };
  // }
}
