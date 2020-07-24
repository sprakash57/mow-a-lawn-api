import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, Quote } from "./interfaces/user.interface";
import { RegisterUsersDto, LoginUsersDto, BookingDto } from "./dto/users.dto";
import { RATE, DISCOUNT_15, DISCOUNT_10, COUPON } from "src/constants";

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async fetchAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async register(user: RegisterUsersDto): Promise<User> {
        const newUser = await this.userModel.findOne({ email: user.email });
        if (!newUser) return await newUser.save();
        else throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    async login(inputUser: LoginUsersDto): Promise<User> {
        try {
            const user = await this.userModel.findOne({ email: inputUser.email }).select('-password');
            user.isNewUser = false;
            return user;
        } catch (error) {
            throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
        }
    }

    booking(order: BookingDto): Quote {
        const { area, coupon } = order;
        if (area < 1) {
            throw new HttpException('Area should be minimum of 1 sq meter.', HttpStatus.BAD_REQUEST);
        } else {
            let total = RATE * area;
            let discount = 0;
            if (area > 25) discount = DISCOUNT_15;
            else if (area > 15) discount = DISCOUNT_10;
            total -= total * discount;
            const quote: Quote = { total, discount }
            if (coupon) {
                total -= total * COUPON;
                quote.coupon = '20% extra discount for new user'
            }
            return quote;
        }
    }
}