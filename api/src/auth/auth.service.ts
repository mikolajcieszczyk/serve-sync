import {
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './jwt/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserEntity | null> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      return user;
    }
    return null;
  }

  async register(userData: RegisterUserDto): Promise<RegisterUserDto> {
    try {
      const existingUser = await this.usersService.findOneByEmail(
        userData.email,
      );
      if (existingUser) {
        throw new ConflictException('User already exists');
      }

      const user = await this.usersService.registerUser(userData);
      return {
        email: user.email,
        password: '',
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to register user');
    }
  }

  async login(loginDto: LoginDto): Promise<{
    email: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: number;
    refreshTokenExpiresAt: number;
  }> {
    const { email, password } = loginDto;
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = { email: user.email };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '7d' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '30d' });

    return {
      email,
      accessToken,
      refreshToken,
      accessTokenExpiresAt: Date.now() + 7 * 24 * 3600 * 1000, // 7 days
      refreshTokenExpiresAt: Date.now() + 30 * 24 * 3600 * 1000, // 30 days
    };
  }

  async refreshAccessToken(
    refreshToken: string,
  ): Promise<{ accessToken: string; accessTokenExpiresAt: number }> {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const newPayload: JwtPayload = { email: payload.email };
      const accessToken = this.jwtService.sign(newPayload, { expiresIn: '7d' });

      return {
        accessToken,
        accessTokenExpiresAt: Date.now() + 7 * 24 * 3600 * 1000,
      };
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
