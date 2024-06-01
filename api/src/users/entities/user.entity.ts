import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
  COACH = 'coach',
  OFFICE_EMPLOYEE = 'office_employee',
  OTHER = 'other',
}

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @Column({ unique: true, nullable: true })
  username: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.CLIENT,
    nullable: true,
  })
  role: UserRole;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: true,
  })
  gender: Gender;

  @Column({ type: 'date', nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  profilePictureUrl: string;

  @Column({ nullable: true })
  additionalInfo: string;
}
