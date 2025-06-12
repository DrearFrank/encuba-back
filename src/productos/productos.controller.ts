import {Controller, Get, Post, Body, Param, Delete, Put, UseGuards} from '@nestjs/common';
import { ProductosService } from './productos.service';
import {Producto} from "./entities/producto";
import {JwtAuthGuard} from "../auth/jwt/jwt.guard";


@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

    @Post()
    create(@Body() data: Partial<Producto>) {
        return this.productosService.create(data);
    }

    @Get()
    findAll() {
        return this.productosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productosService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: Partial<Producto>) {
        return this.productosService.update(+id, data);
    }
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productosService.remove(+id);
    }
}
