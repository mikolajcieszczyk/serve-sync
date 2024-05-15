import { Injectable } from '@nestjs/common';

interface IUser {
  userId: number;
  username: string;
  password: string;
}

export type User = IUser;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'miki',
      password: 'miki',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'maria',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
