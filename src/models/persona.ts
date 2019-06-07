import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base-entity";


@Entity()
export class Persona  extends BaseEntity{
    @Column()
    private dni:number;
    @Column()
    private nombre:string;
    @Column()
    private edad:number;

    constructor(){
        super();
    }

    getDni():number{
        return this.dni;
    }
    setDni(dni:number){
        this.dni = dni;
    }

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getEdad():number{
        return this.edad;
    }
    setEdad(edad:number){
        this.edad = edad;
    }
}
