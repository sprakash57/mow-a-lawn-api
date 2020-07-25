import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { DB_URI } from './constants';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(DB_URI)]
})
export class AppModule { }
