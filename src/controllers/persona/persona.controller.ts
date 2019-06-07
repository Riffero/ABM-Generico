import { Controller } from '@nestjs/common';
import { PersonaService } from 'src/services/persona/persona.service';
import { BaseController } from '../base.controller';
import { Persona } from 'src/models/persona';

@Controller('personas')
export class PersonaController extends BaseController<Persona>{

    constructor(private readonly _personaService:PersonaService){
        super(_personaService);
    }
}
