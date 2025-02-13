import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

interface iOrder {
  userId: number;
  itemName: string;
}

interface iOrderWithId extends iOrder {
  id: number;
}

@Controller('/orders')
export class OrdersController {
  constructor(private readonly appService: OrdersService) {}

  @Get()
  getAllItem(): iOrderWithId[] | string {
    try {
      return this.appService.getAllItem();
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Post()
  createItem(@Body() obj: iOrder): iOrderWithId[] | string {
    try {
      return this.appService.createItem(obj);
    } catch (error) {
      return (error as Error).message;
    }
  }
}
