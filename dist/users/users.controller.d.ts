import { User } from "./entities/user";
import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(body: User): Promise<Partial<User> & User>;
}
