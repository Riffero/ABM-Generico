import { Controller } from '@nestjs/common';

import { BaseController } from '../base.controller';
import { Producto } from 'src/models/producto';
import { ProductoService } from 'src/services/producto/producto.service';


@Controller('productos')
export class ProductoController extends BaseController<Producto>{

    constructor(private readonly _productoService:ProductoService){
        super(_productoService);
    }
}
