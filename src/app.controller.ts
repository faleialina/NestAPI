import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

interface iUser {
  name: string;
  description: string;
}

interface iUserWithId extends iUser {
  id: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllItem(): iUserWithId[] | string {
    try {
      return this.appService.getAllItem();
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Post()
  createItem(@Body() obj: iUser): iUserWithId[] | string {
    try {
      return this.appService.createItem(obj);
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Put(':id')
  updateItem(
    @Body() obj: iUser,
    @Param('id') id: string,
  ): iUserWithId[] | string {
    try {
      return this.appService.updateItem(id, obj);
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Delete(':id')
  deleteItem(@Param('id') id: string): iUserWithId[] | string {
    try {
      return this.appService.deleteItem(id);
    } catch (error) {
      return (error as Error).message;
    }
  }
}
