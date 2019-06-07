import { Injectable, BadGatewayException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

//servicos y modelos
import { IBaseService } from './Ibase.service';


//npm install typescript@3.1.6 arregla posibles errores de compilacion

@Injectable()
export class BaseService<T> implements IBaseService<T> {

    constructor(
        private readonly genericRepository: Repository<T>
    ) { }

    //Generic CRUD
    getAll(): Promise<T[]> {
        try {
            return <Promise<T[]>>this.genericRepository.find();
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    getById(id: string): Promise<T> {
        try {
            return <Promise<T>>this.genericRepository.findOne(id);
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    async update(id:string,entity: T): Promise<any> {
        try {
           const responseAux = await this.genericRepository.findOne(id);
            if(responseAux == null) throw new NotFoundException("El id no existe");
            const response = this.genericRepository.update(id,entity);
            return response;
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    async create(entity: T): Promise<T> {
        try {
            const response: T = await this.genericRepository.save(entity);
            return response;
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }
    delete(id: string) {
        try {
            this.genericRepository.delete(id);
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }
}
