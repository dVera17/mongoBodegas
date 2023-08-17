import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';
export default class Producto {

    @Expose({name: "id_prod"})
    id: number
    @Expose({name: "name_prod"})
    nombre: string
    @Expose({name: "desc_prod"})
    descripcion: string
    @Expose({name: "status_prod"})
    estado: number
    @Expose({name: "created_by_prod"})
    created_by: number
    @Expose({name: "update_by_prod"})
    update_by: number
    @Expose({name: "created_at_prod"})
    created_at: string
    @Expose({name: "updated_at_prod"})
    updated_at: string
    @Expose({name: "deleted_at_prod"})
    deleted_at: string

    constructor(data:Partial<Producto>){
        Object.assign(this, data)
        this.id = 0;
        this.nombre = "nombre";
        this.descripcion = "description";
        this.estado = 0;
    }

}