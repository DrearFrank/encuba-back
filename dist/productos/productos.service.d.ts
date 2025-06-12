import { Repository } from 'typeorm';
import { Producto } from "./entities/producto";
export declare class ProductosService {
    private productoRepo;
    constructor(productoRepo: Repository<Producto>);
    create(data: Partial<Producto>): Promise<Partial<Producto> & Producto>;
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto>;
    update(id: number, data: Partial<Producto>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
