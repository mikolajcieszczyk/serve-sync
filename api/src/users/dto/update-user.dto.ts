import { UserRole, Gender } from '../entities/user.entity';

export class UpdateUserDto {
  username?: string;
  firstName?: string;
  lastName?: string;
  gender?: Gender;
  dateOfBirth?: Date;
  phoneNumber?: string;
  profilePictureUrl?: string;
  additionalInfo?: string;
  role?: UserRole;
}
