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

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllItem(): string {
    return this.appService.getAllItem();
  }
  @Post()
  createItem(@Body() obj: any): any {
    return this.appService.createItem(obj);
  }
  @Put(':id')
  updateItem(@Body() obj: any, @Param('id') id: string): any {
    return this.appService.updateItem(id, obj);
  }
  @Delete(':id')
  deleteItem(@Param('id') id: string): string {
    return this.appService.deleteItem(id);
  }
}
