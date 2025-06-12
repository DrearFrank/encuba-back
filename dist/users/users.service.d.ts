import { User } from "./entities/user";
import { Repository } from "typeorm";
export declare class UsersService {
    private readonly repo;
    constructor(repo: Repository<User>);
    findByUsername(username: string): Promise<User>;
    create(user: Partial<User>): Promise<Partial<User> & User>;
}
