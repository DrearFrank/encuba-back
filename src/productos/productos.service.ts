import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Producto} from "./entities/producto";

@Injectable()
export class ProductosService {
    constructor(
        @InjectRepository(Producto)
        private productoRepo: Repository<Producto>,
    ) {}

    create(data: Partial<Producto>) {
        return this.productoRepo.save(data);
    }

    findAll() {
        return this.productoRepo.find();
    }

    findOne(id: number) {
        return this.productoRepo.findOneBy({ id });
    }

    update(id: number, data: Partial<Producto>) {
        return this.productoRepo.update(id, data);
    }

    remove(id: number) {
        return this.productoRepo.delete(id);
    }
}
