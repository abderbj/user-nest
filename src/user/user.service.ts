import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async create(user: User): Promise<User> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async getOne(id : string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async delete(id : string) : Promise<string> {
        await this.userModel.findByIdAndDelete(id).exec();
        return 'User deleted';
    }

    async update(id : string, updatedUser : User): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, updatedUser, { new: true }).exec();
    }
}
