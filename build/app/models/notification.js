var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DateTime } from 'luxon';
import { BaseModel, column } from '@adonisjs/lucid/orm';
import { compose } from '@adonisjs/core/helpers';
import { Searchable } from '@foadonis/magnify';
export default class Notification extends compose(BaseModel, Searchable) {
    toSearchableObject() {
        return {
            id: this.id,
            users: this.users,
            message: this.message,
            scope: this.scope,
            active: this.active,
            tags: ['Magnify', 'Adonis'],
        };
    }
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Notification.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Notification.prototype, "scope", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Notification.prototype, "users", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Notification.prototype, "message", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], Notification.prototype, "active", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Notification.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Notification.prototype, "updatedAt", void 0);
//# sourceMappingURL=notification.js.map