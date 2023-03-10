import {Body, Controller, Post} from '@nestjs/common';
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../users/dto/create_user.dto";
import {User} from "../users/users.model";
import {AuthService} from "./auth.service";

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @ApiResponse({status: 200, type: User})
    @Post('login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @ApiResponse({status: 201, type: User})
    @Post('registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }
}