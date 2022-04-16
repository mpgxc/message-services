import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './CreateUserDto';

@Injectable()
export class AppService {
  async createUser(data: CreateUserDto): Promise<CreateUserDto> {
    await this.sleep(2_000);

    console.log('[AppService.createUser] data:', data);

    return data;
  }

  async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
