import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './modules/persona/persona.module';
import { Connection } from 'typeorm';
import { ProductoModule } from './modules/producto/producto.module';




@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PersonaModule,
    ProductoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
  constructor(private readonly connnection:Connection){}

}
