import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UsersController } from './user/user.controller';
import { UsersService } from './user/user.service';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/users'), // Establishes the Mongoose connection
        MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]), // Provides the User model/schema
    ],
    controllers: [AppController, UsersController],
    providers: [AppService, UsersService], // Include both AppService and UsersService
})
export class AppModule {}
