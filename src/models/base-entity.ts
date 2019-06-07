import { ObjectID, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class BaseEntity {
    @ObjectIdColumn()
    private id:ObjectID;

    constructor(){}

    getId():ObjectID{
        return this.id;
    }
    setID(id:ObjectID){
        this.id = id;
    }
}
