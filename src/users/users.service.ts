import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly repo: Repository<User>,
    ) {}
    async findByUsername(username: string) {
        return this.repo.findOne({ where: { username } });
    }

    async create(user: Partial<User>) {
        return this.repo.save(user);
    }

}
