import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllItem(): string {
    return 'getItem';
  }
  createItem(obj: any): any {
    return obj;
  }
  updateItem(id: string, obj: any): any {
    return [id, obj];
  }
  deleteItem(id: string): string {
    return `deleteItem ${id}`;
  }
}
