import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import {Producto} from "./entities/producto";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],

  providers: [ProductosService],
  controllers: [ProductosController]
})
export class ProductosModule {}
