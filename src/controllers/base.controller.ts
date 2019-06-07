import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete } from '@nestjs/common';
import { IBaseService } from 'src/services/Ibase.service';
import { Entity } from 'typeorm';


export class BaseController<T> {

    constructor(private readonly _IBaseService: IBaseService<T>) { }

    @Get('/')
    async findAll(@Res() res): Promise<T[]> {
        const results: T[] = await this._IBaseService.getAll();
        return res.status(HttpStatus.FOUND).json(results);
    }

    @Get('/:id')
    async findById(@Res() res, @Param('id') id): Promise<T> {
        const result: T = await this._IBaseService.getById(id);
        return res.status(HttpStatus.FOUND).json(result);
    }

    @Post('/')
    async create(@Res() res, @Body() entity: T): Promise<T>{
        const result: T = await this._IBaseService.create(entity);
        return res.status(HttpStatus.CREATED).json(result);
    }

    @Put('/:id')
    async update(@Res() res, @Body() entity:T, @Param('id') id): Promise<T>{
        const result: T = await this._IBaseService.update(id,entity);
        return res.status(HttpStatus.CREATED).json({
            message: 'Registro actualizado'
        });
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id){
        this._IBaseService.delete(id);
        return res.status(HttpStatus.OK).json({
            message: 'Registro eliminado'
        });
    }
}
