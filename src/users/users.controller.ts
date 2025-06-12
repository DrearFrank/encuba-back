import {Body, Controller, Post} from '@nestjs/common';
import {User} from "./entities/user";
import {UsersService} from "./users.service";
import * as bcrypt from 'bcryptjs';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService ) {}
    @Post('register')
    async register(@Body() body: User) {
        body.password = bcrypt.hashSync(body.password, 10);
        return this.usersService.create(body);
    }

}
