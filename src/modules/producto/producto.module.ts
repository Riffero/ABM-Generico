import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/models/producto';
import { ProductoController } from 'src/controllers/producto/producto.controller';
import { ProductoService } from 'src/services/producto/producto.service';

@Module({
    imports: [TypeOrmModule.forFeature([Producto])],
    controllers: [ProductoController],
    providers: [ProductoService]
})
export class ProductoModule {}
