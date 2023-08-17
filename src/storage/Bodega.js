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
export default class Bodega {
    constructor(data) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre = "name";
        this.id_responsable = 0;
        this.estado = 0;
    }
}
__decorate([
    Expose({ name: "id_bod" }),
    IsDefined({ message: () => { throw { status: 406, message: "'id_bod' es requerido" }; } }),
    __metadata("design:type", Number)
], Bodega.prototype, "id", void 0);
__decorate([
    Expose({ name: "name_bod" }),
    IsDefined({ message: () => { throw { status: 406, message: "'name_bod' es requerido" }; } }),
    __metadata("design:type", String)
], Bodega.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "id_responsable_bod" }),
    IsDefined({ message: () => { throw { status: 406, message: "'id_responsable_bod' es requerido" }; } }),
    __metadata("design:type", Number)
], Bodega.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: "status_bod" }),
    IsDefined({ message: () => { throw { status: 406, message: "'status_bod' es requerido" }; } }),
    __metadata("design:type", Number)
], Bodega.prototype, "estado", void 0);
__decorate([
    Expose({ name: "created_by_bod" }),
    __metadata("design:type", Number)
], Bodega.prototype, "created_by", void 0);
__decorate([
    Expose({ name: "update_by_bod" }),
    __metadata("design:type", Number)
], Bodega.prototype, "update_by", void 0);
__decorate([
    Expose({ name: "created_at_bod" }),
    __metadata("design:type", String)
], Bodega.prototype, "created_at", void 0);
__decorate([
    Expose({ name: "updated_at_bod" }),
    __metadata("design:type", String)
], Bodega.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: "deleted_at_bod" }),
    __metadata("design:type", String)
], Bodega.prototype, "deleted_at", void 0);
