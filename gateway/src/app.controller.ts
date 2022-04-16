import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './CreateUserDto';

@Controller()
export class AppController {
  constructor(
    @Inject('USER_MICROSERVICE') private readonly client: ClientProxy,
  ) {}

  @Post('create-user')
  async createUser(@Body() payload: CreateUserDto) {
    await this.client.send('create_user', payload).toPromise();
  }
}
