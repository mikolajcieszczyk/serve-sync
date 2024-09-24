import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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
      const { email, password, role } = registerUserDto;
      const passwordHash = await bcrypt.hash(password, 10);

      const user = this.usersRepository.create({
        email,
        passwordHash,
        role,
      });

      return await this.usersRepository.save(user);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        'Failed to save user to the database',
      );
    }
  }

  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    try {
      await this.usersRepository.update(userId, updateUserDto);
      const updatedUser = await this.usersRepository.findOneBy({ userId });
      if (!updatedUser) {
        throw new NotFoundException(`User with ID ${userId} not found`);
      }
      return updatedUser;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to update user');
    }
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    return this.usersRepository.findOneBy({ email });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async getUserById(userId: string): Promise<UserEntity> {
    return this.usersRepository.findOne({ where: { userId } });
  }
}
