import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { email, password } = registerUserDto;
    const passwordHash = password;
    // const passwordHash = await bcrypt.hash(password, 10);

    const user = this.usersRepository.create({
      email,
      passwordHash,
    });

    return this.usersRepository.save(user);
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
