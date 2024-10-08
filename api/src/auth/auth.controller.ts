import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { UserRole } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMe(@Req() req) {
    return req.user;
  }

  @Post('register')
  async register(@Body() req: RegisterUserDto) {
    const userData = {
      email: req.email,
      password: req.password,
      role: req.role || UserRole.CLIENT,
    };

    return this.authService.register(userData);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<{ accessToken: string }> {
    return this.authService.login(loginDto);
  }

  @Post('refresh-token')
  async refreshAccessToken(
    @Body('refreshToken') refreshToken: string,
  ): Promise<{ accessToken: string }> {
    return this.authService.refreshAccessToken(refreshToken);
  }
}
