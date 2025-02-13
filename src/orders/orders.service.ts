import { Injectable } from '@nestjs/common';
import orders from 'src/storage/orders';

interface iOrder {
  userId: number;
  itemName: string;
}

interface iOrderWithId extends iOrder {
  id: number;
}

@Injectable()
export class OrdersService {
  getAllItem(): iOrderWithId[] {
    if (orders.length === 0) throw new Error('The database is empty');

    return orders;
  }

  createItem(obj: iOrder): iOrderWithId[] {
    if (!obj.userId || !obj.itemName)
      throw new Error('There are incomplete fields');

    const newId: number =
      orders.length === 0 ? 1 : orders[orders.length - 1].id + 1;
    orders.push({ id: newId, ...obj });

    return orders;
  }
}
