import {
  IsOptional,
  IsString,
  IsEnum,
  IsDate,
  IsPhoneNumber,
  IsUrl,
  IsUUID,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UserRole, Gender } from '../entities/user.entity';

export class UpdateUserDto {
  @IsUUID()
  @IsOptional()
  @IsString()
  @MinLength(3)
  username?: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dateOfBirth?: Date;

  @IsOptional()
  @IsPhoneNumber(null)
  phoneNumber?: string;

  @IsOptional()
  @IsUrl()
  profilePictureUrl?: string;

  @IsOptional()
  @IsString()
  additionalInfo?: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
