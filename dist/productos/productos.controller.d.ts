import { ProductosService } from './productos.service';
import { Producto } from "./entities/producto";
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    create(data: Partial<Producto>): Promise<Partial<Producto> & Producto>;
    findAll(): Promise<Producto[]>;
    findOne(id: string): Promise<Producto>;
    update(id: string, data: Partial<Producto>): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
