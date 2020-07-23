import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from "./interfaces/user.interface";
import { RegisterUsersDto } from "./dto/register-users.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async fetchAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async register(user: RegisterUsersDto): Promise<User> {
        const newUser = new this.userModel(user);
        return await newUser.save();
    }
}