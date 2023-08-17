import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';
export default class Producto {

    @Expose({ name: "id_prod" })
    @IsDefined({ message: () => { throw { status: 406, message: "'id_prod' es requerido" } } })
    id: number
    @Expose({ name: "name_prod" })
    @IsDefined({ message: () => { throw { status: 406, message: "'name_prod' es requerido" } } })
    nombre: string
    @Expose({ name: "desc_prod" })
    @IsDefined({ message: () => { throw { status: 406, message: "'desc_prod' es requerido" } } })
    descripcion: string
    @Expose({ name: "status_prod" })
    @IsDefined({ message: () => { throw { status: 406, message: "'status_prod' es requerido" } } })
    estado: number
    @Expose({ name: "created_by_prod" })
    created_by: number
    @Expose({ name: "update_by_prod" })
    update_by: number
    @Expose({ name: "created_at_prod" })
    created_at: string
    @Expose({ name: "updated_at_prod" })
    updated_at: string
    @Expose({ name: "deleted_at_prod" })
    deleted_at: string

    constructor(data: Partial<Producto>) {
        Object.assign(this, data)
        this.id = 0;
        this.nombre = "nombre";
        this.descripcion = "description";
        this.estado = 0;
    }

}