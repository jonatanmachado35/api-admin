"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRoleRepository = void 0;
const common_1 = require("@nestjs/common");
let InMemoryRoleRepository = class InMemoryRoleRepository {
    roles = [];
    async create(role) {
        this.roles.push(role);
        return role;
    }
    async findByName(name) {
        return this.roles.find((r) => r.name === name) || null;
    }
    async findById(id) {
        return this.roles.find((r) => r.id === id) || null;
    }
};
exports.InMemoryRoleRepository = InMemoryRoleRepository;
exports.InMemoryRoleRepository = InMemoryRoleRepository = __decorate([
    (0, common_1.Injectable)()
], InMemoryRoleRepository);
//# sourceMappingURL=in-memory-role.repository.js.map