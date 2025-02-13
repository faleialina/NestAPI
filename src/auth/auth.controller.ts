import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

interface iUser {
  username: string;
  email: string;
  password: string;
}

interface iUserWithId extends iUser {
  id: number;
}

@Controller('/auth')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Post('/reg')
  createItem(@Body() obj: iUser): iUserWithId[] | string {
    try {
      return this.appService.createItem(obj);
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Post('/login')
  checkItem(@Body() obj: iUser): iUserWithId[] | string {
    try {
      return this.appService.checkItem(obj);
    } catch (error) {
      return (error as Error).message;
    }
  }
}
