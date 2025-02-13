import { Injectable } from '@nestjs/common';
import users from 'src/storage/user';

interface iUser {
  username: string;
  email: string;
  password: string;
}

interface iUserWithId extends iUser {
  id: number;
}

@Injectable()
export class AuthService {
  createItem(obj: iUser): iUserWithId[] {
    if (!obj.username || !obj.email || !obj.password)
      throw new Error('There are incomplete fields');

    const newId: number =
      users.length === 0 ? 1 : users[users.length - 1].id + 1;
    users.push({ id: newId, ...obj });

    return users;
  }
  checkItem(obj: iUser): string {
    if (!obj.username || !obj.password)
      throw new Error('There are incomplete fields');
    const checkUser = users.some(
      (el) => el.username == obj.username && el.password == obj.password,
    );

    return checkUser ? 'Вход выполнен' : 'Неверные данные';
  }
}
