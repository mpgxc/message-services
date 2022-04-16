import { Module } from '@nestjs/common';
import {
  ClientOptions,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'USER_MICROSERVICE',
      useFactory: () => {
        const options = {
          transport: Transport.TCP,
          options: {
            host: '127.0.0.1',
            port: 8875,
          },
        };
        return ClientProxyFactory.create(options as ClientOptions);
      },
    },
  ],
})
export class AppModule {}
