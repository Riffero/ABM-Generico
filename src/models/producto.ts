import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base-entity";


@Entity()
export class Producto extends BaseEntity {
    @Column()
    private nombre:string;
    @Column()
    private precio:number;
    @Column()
    private disponible:boolean;

    constructor(){
        super();
    }

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getPrecio():number{
        return this.precio;
    }
    setPrecio(precio:number){
        this.precio = precio;
    }

    getDisponible():boolean{
        return this.disponible;
    }
    setDisponible(disponible:boolean){
        this.disponible = disponible;
    }
}
