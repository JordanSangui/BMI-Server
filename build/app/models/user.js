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
import hash from '@adonisjs/core/services/hash';
import { BaseModel, column } from '@adonisjs/lucid/orm';
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid';
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens';
import { compose } from '@adonisjs/core/helpers';
import { Searchable } from '@foadonis/magnify';
const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
    uids: ['email'],
    passwordColumnName: 'password',
});
export default class User extends compose(BaseModel, AuthFinder, Searchable) {
    static accessTokens = DbAccessTokensProvider.forModel(User);
    currentAccessToken;
    toSearchableObject() {
        return {
            id: this.id,
            lastName: this.lastName,
            firstName: this.firstName,
            email: this.email,
            tel: this.tel,
            profileImage: this.profileImage,
            images: this.images,
            description: this.description,
            country: this.country,
            city: this.city,
            address: this.address,
            gender: this.gender,
            genderFind: this.genderFind,
            status: this.status,
            findMe: this.findMe,
            verified: this.verified,
            showInformationMe: this.showInformationMe,
            active: this.active,
            tags: ['Magnify', 'Adonis'],
        };
    }
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], User.prototype, "lastName", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], User.prototype, "email", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], User.prototype, "tel", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], User.prototype, "profileImage", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], User.prototype, "images", void 0);
__decorate([
    column({ serializeAs: null }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], User.prototype, "description", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], User.prototype, "address", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "genderFind", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], User.prototype, "findMe", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], User.prototype, "showInformationMe", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], User.prototype, "verified", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], User.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", Object)
], User.prototype, "updatedAt", void 0);
//# sourceMappingURL=user.js.map