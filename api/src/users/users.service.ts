import { Injectable } from '@nestjs/common';

interface IUser {
  id: number;
  username: string;
  password: string;
}

export type User = IUser;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'miki',
      password: 'miki',
    },
    {
      id: 2,
      username: 'maria',
      password: 'maria',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
