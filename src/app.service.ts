import { Injectable } from '@nestjs/common';

interface iUser {
  name: string;
  description: string;
}

interface iUserWithId extends iUser {
  id: number;
}

const fakeDataBase: iUserWithId[] = [];

@Injectable()
export class AppService {
  getAllItem(): iUserWithId[] {
    if (fakeDataBase.length === 0) throw new Error('The database is empty');

    return fakeDataBase;
  }

  createItem(obj: iUser): iUserWithId[] {
    if (!obj.name || !obj.description)
      throw new Error('There are incomplete fields');

    const newId: number =
      fakeDataBase.length === 0
        ? 1
        : fakeDataBase[fakeDataBase.length - 1].id + 1;
    fakeDataBase.push({ id: newId, ...obj });

    return fakeDataBase;
  }

  updateItem(id: string, obj: iUser): iUserWithId[] {
    if (!obj.name || !obj.description)
      throw new Error('There are incomplete fields');
    if (fakeDataBase.findIndex((el) => el.id === +id) === -1)
      throw new Error('Such ID does not exist');

    const indexEl = fakeDataBase.findIndex((el) => el.id === +id);

    fakeDataBase[indexEl] = { ...fakeDataBase[indexEl], ...obj };

    return fakeDataBase;
  }

  deleteItem(id: string): iUserWithId[] {
    if (fakeDataBase.findIndex((el) => el.id === +id) === -1)
      throw new Error('Such ID does not exist');

    const indexEl = fakeDataBase.findIndex((el) => el.id === +id);

    fakeDataBase.splice(indexEl, 1);

    return fakeDataBase;
  }
}
