import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from '../base.service';
import { Producto } from 'src/models/producto';

@Injectable()
export class ProductoService extends BaseService<Producto>{
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>){
            super(productoRepository);
        }
}
