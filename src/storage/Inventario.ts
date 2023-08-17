import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';
export default class Inventario {

    @Expose({ name: "id_inven" })
    @IsDefined({ message: () => { throw { status: 406, message: "'id_inven' es requerido" } } })
    id: number
    @Expose({ name: "id_bodega_inven" })
    @IsDefined({ message: () => { throw { status: 406, message: "'id_bodega_inven' es requerido" } } })
    id_bodega: number
    @Expose({ name: "id_producto_inven" })
    @IsDefined({ message: () => { throw { status: 406, message: "'id_producto_inven' es requerido" } } })
    id_producto: number
    @Expose({ name: "cantidad_inven" })
    @IsDefined({ message: () => { throw { status: 406, message: "'cantidad_inven' es requerido" } } })
    cantidad: number
    @Expose({ name: "created_by_inven" })
    created_by: number
    @Expose({ name: "update_by_inven" })
    update_by: number
    @Expose({ name: "created_at_inven" })
    created_at: string
    @Expose({ name: "updated_at_inven" })
    updated_at: string
    @Expose({ name: "deleted_at_inven" })
    deleted_at: string

    constructor(data: Partial<Inventario>) {
        Object.assign(this, data);
        this.id = 0;
        this.id_bodega = 0;
        this.id_producto = 0;
        this.cantidad = 0;
    }
}