import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from '../base.service';
import { Persona } from 'src/models/persona';


@Injectable()
export class PersonaService extends BaseService<Persona> {
    constructor(
        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>){
        super(personaRepository);
    }
}
