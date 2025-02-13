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
export class UserService {
  getAllItem(): iUserWithId[] {
    if (users.length === 0) throw new Error('The database is empty');

    return users;
  }

  createItem(obj: iUser): iUserWithId[] {
    if (!obj.username || !obj.email || !obj.password)
      throw new Error('There are incomplete fields');

    const newId: number =
      users.length === 0 ? 1 : users[users.length - 1].id + 1;
    users.push({ id: newId, ...obj });

    return users;
  }

  updateItem(id: string, obj: iUser): iUserWithId[] {
    if (!obj.username || !obj.email || !obj.password)
      throw new Error('There are incomplete fields');
    if (users.findIndex((el) => el.id === +id) === -1)
      throw new Error('Such ID does not exist');

    const indexEl = users.findIndex((el) => el.id === +id);

    users[indexEl] = { ...users[indexEl], ...obj };

    return users;
  }

  deleteItem(id: string): iUserWithId[] {
    if (users.findIndex((el) => el.id === +id) === -1)
      throw new Error('Such ID does not exist');

    const indexEl = users.findIndex((el) => el.id === +id);

    users.splice(indexEl, 1);

    return users;
  }
}
