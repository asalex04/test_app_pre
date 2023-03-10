import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create_user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {JwtAuthGuard} from "../../guards/jwt-guard";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor( private userService: UsersService) {}

    @ApiOperation({ summary: 'User creation' })
    @ApiResponse({ status: 201, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, type: [User] })
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.userService.getUsers()
    }
}
