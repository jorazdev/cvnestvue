import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

import { TypeOrmModule } from '@nestjs/typeorm';
import  entities  from './entity'
import * as dotenv from 'dotenv';
dotenv.config()


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../public/build'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(<string>process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: entities,
      synchronize: true,
      autoLoadEntities: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
