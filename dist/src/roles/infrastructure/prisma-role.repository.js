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
exports.PrismaRoleRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const role_entity_1 = require("../domain/role.entity");
let PrismaRoleRepository = class PrismaRoleRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(role) {
        const createdRole = await this.prisma.role.create({ data: role });
        return new role_entity_1.Role(createdRole);
    }
    async findByName(name) {
        const role = await this.prisma.role.findUnique({ where: { name } });
        return role ? new role_entity_1.Role(role) : null;
    }
    async findById(id) {
        const role = await this.prisma.role.findUnique({ where: { id } });
        return role ? new role_entity_1.Role(role) : null;
    }
};
exports.PrismaRoleRepository = PrismaRoleRepository;
exports.PrismaRoleRepository = PrismaRoleRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaRoleRepository);
//# sourceMappingURL=prisma-role.repository.js.map