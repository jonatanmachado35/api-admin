"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleUseCase = void 0;
const common_1 = require("@nestjs/common");
const role_repository_1 = require("../domain/role.repository");
const role_entity_1 = require("../domain/role.entity");
const uuid_1 = require("uuid");
let CreateRoleUseCase = class CreateRoleUseCase {
    roleRepository;
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async execute(name) {
        const existingRole = await this.roleRepository.findByName(name);
        if (existingRole) {
            throw new common_1.ConflictException('Role already exists');
        }
        const newRole = new role_entity_1.Role({
            id: (0, uuid_1.v4)(),
            name,
            created_at: new Date(),
        });
        return this.roleRepository.create(newRole);
    }
};
exports.CreateRoleUseCase = CreateRoleUseCase;
exports.CreateRoleUseCase = CreateRoleUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [role_repository_1.RoleRepository])
], CreateRoleUseCase);
//# sourceMappingURL=create-role.use-case.js.map