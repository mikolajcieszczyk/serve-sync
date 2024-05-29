import { Injectable } from '@nestjs/common';
// import * as bcrypt from 'bcrypt';

export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private users: User[] = [];

  saltOrRounds: number = 10;

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'test',
        password: 'test',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async create(userData: any): Promise<User> {
    const userId = Date.now();
    // const hashedPassword = await bcrypt.hash(
    //   userData.password,
    //   this.saltOrRounds,
    // );

    const newUser: User = {
      userId: userId,
      username: userData.username,
      password: userData.password,
      // password: hashedPassword,
    };

    this.users.push(newUser);

    return newUser;
  }
}
