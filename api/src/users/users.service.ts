import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    try {
      const { email, password } = registerUserDto;
      const passwordHash = await bcrypt.hash(password, 10);

      const user = this.usersRepository.create({
        email,
        passwordHash,
      });

      return await this.usersRepository.save(user);
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to save user to the database',
      );
    }
  }

  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    await this.usersRepository.update(userId, updateUserDto);
    return this.usersRepository.findOneBy({ userId });
  }

  async findOneByEmail(email: string): Promise<UserEntity | undefined> {
    return this.usersRepository.findOneBy({ email });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }
}
