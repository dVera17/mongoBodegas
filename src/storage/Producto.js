var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';
export default class Producto {
    constructor(data) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre = "nombre";
        this.descripcion = "description";
        this.estado = 0;
    }
}
__decorate([
    Expose({ name: "id_prod" }),
    IsDefined({ message: () => { throw { status: 406, message: "'id_prod' es requerido" }; } }),
    __metadata("design:type", Number)
], Producto.prototype, "id", void 0);
__decorate([
    Expose({ name: "name_prod" }),
    IsDefined({ message: () => { throw { status: 406, message: "'name_prod' es requerido" }; } }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "desc_prod" }),
    IsDefined({ message: () => { throw { status: 406, message: "'desc_prod' es requerido" }; } }),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: "status_prod" }),
    IsDefined({ message: () => { throw { status: 406, message: "'status_prod' es requerido" }; } }),
    __metadata("design:type", Number)
], Producto.prototype, "estado", void 0);
__decorate([
    Expose({ name: "created_by_prod" }),
    __metadata("design:type", Number)
], Producto.prototype, "created_by", void 0);
__decorate([
    Expose({ name: "update_by_prod" }),
    __metadata("design:type", Number)
], Producto.prototype, "update_by", void 0);
__decorate([
    Expose({ name: "created_at_prod" }),
    __metadata("design:type", String)
], Producto.prototype, "created_at", void 0);
__decorate([
    Expose({ name: "updated_at_prod" }),
    __metadata("design:type", String)
], Producto.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: "deleted_at_prod" }),
    __metadata("design:type", String)
], Producto.prototype, "deleted_at", void 0);
