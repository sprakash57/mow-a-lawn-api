import { Controller, Post, Body, Get } from '@nestjs/common';
import { RegisterUsersDto } from './dto/register-users.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async fetchAll(): Promise<User[]> {
        return this.usersService.fetchAll();
    }

    @Post()
    register(@Body() registerUsersDto: RegisterUsersDto): Promise<User> {
        return this.usersService.register(registerUsersDto)
    }
}
