import { Controller, Post, Body, Get } from '@nestjs/common';
import { RegisterUsersDto, LoginUsersDto, BookingDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { User, Quote } from './interfaces/user.interface';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @ApiOperation({ summary: 'Fetch All registered user' })
    @ApiResponse({ status: 200, description: 'Found users', type: RegisterUsersDto })
    async fetchAll(): Promise<User[]> {
        return this.usersService.fetchAll();
    }

    @Post('register')
    @ApiOperation({ summary: 'Register new user' })
    @ApiResponse({ status: 200, description: 'Successful registration', type: RegisterUsersDto })
    @ApiResponse({ status: 409, description: 'User already exists' })
    register(@Body() registerUsersDto: RegisterUsersDto): Promise<User> {
        return this.usersService.register(registerUsersDto)
    }

    @Post('login')
    @ApiOperation({ summary: 'Login' })
    @ApiResponse({ status: 200, description: 'Successful login', type: RegisterUsersDto })
    @ApiResponse({ status: 400, description: 'Invalid credentials' })
    login(@Body() loginUsersDto: LoginUsersDto): Promise<User> {
        return this.usersService.login(loginUsersDto);
    }

    @Post('book')
    @ApiOperation({ summary: 'Booking' })
    @ApiResponse({ status: 200, description: 'Book an appointment', type: BookingDto })
    @ApiResponse({ status: 400, description: 'Area should be minimum of 1 sq meter' })
    booking(@Body() bookingDto: BookingDto): Quote {
        return this.usersService.booking(bookingDto);
    }
}
