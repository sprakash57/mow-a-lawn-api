import { Controller, Post, Body, Get } from '@nestjs/common';
import { RegisterUsersDto, LoginUsersDto, BookingDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { User, Quote } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async fetchAll(): Promise<User[]> {
        return this.usersService.fetchAll();
    }

    @Post('register')
    register(@Body() registerUsersDto: RegisterUsersDto): Promise<User> {
        return this.usersService.register(registerUsersDto)
    }

    @Post('login')
    login(@Body() loginUsersDto: LoginUsersDto): Promise<User> {
        return this.usersService.login(loginUsersDto);
    }

    @Post('book')
    booking(@Body() bookingDto: BookingDto): Quote {
        return this.usersService.booking(bookingDto);
    }
}
