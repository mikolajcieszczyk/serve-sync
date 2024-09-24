import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class RegisterUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(16)
  password: string;

  @IsOptional()
  @IsEnum(UserRole, { message: 'Invalid role type' })
  role?: UserRole;
}
