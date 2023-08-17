import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';
export default class Bodega {

    @Expose({ name: "id_bod" })
    @IsDefined({ message: () => { throw { status: 406, message: "'id_bod' es requerido" } } })
    id: number
    @Expose({ name: "name_bod" })
    @IsDefined({ message: () => { throw { status: 406, message: "'name_bod' es requerido" } } })
    nombre: string
    @Expose({ name: "id_responsable_bod" })
    @IsDefined({ message: () => { throw { status: 406, message: "'id_responsable_bod' es requerido" } } })
    id_responsable: number
    @Expose({ name: "status_bod" })
    @IsDefined({ message: () => { throw { status: 406, message: "'status_bod' es requerido" } } })
    estado: number
    @Expose({ name: "created_by_bod" })
    created_by: number
    @Expose({ name: "update_by_bod" })
    update_by: number
    @Expose({ name: "created_at_bod" })
    created_at: string
    @Expose({ name: "updated_at_bod" })
    updated_at: string
    @Expose({ name: "deleted_at_bod" })
    deleted_at: string

    constructor(data: Partial<Bodega>) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre = "name";
        this.id_responsable = 0;
        this.estado = 0
    }
}