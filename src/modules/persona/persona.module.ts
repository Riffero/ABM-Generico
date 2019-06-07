import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PersonaService } from 'src/services/persona/persona.service';
import { PersonaController } from 'src/controllers/persona/persona.controller';
import { Persona } from 'src/models/persona';

@Module({
    imports: [TypeOrmModule.forFeature([Persona])],
    controllers: [PersonaController],
    providers: [PersonaService]
})
export class PersonaModule {}
