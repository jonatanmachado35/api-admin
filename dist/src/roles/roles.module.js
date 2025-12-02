"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesModule = void 0;
const common_1 = require("@nestjs/common");
const roles_controller_1 = require("./presentation/roles.controller");
const create_role_use_case_1 = require("./application/create-role.use-case");
const role_repository_1 = require("./domain/role.repository");
const prisma_role_repository_1 = require("./infrastructure/prisma-role.repository");
const prisma_module_1 = require("../prisma/prisma.module");
let RolesModule = class RolesModule {
};
exports.RolesModule = RolesModule;
exports.RolesModule = RolesModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [roles_controller_1.RolesController],
        providers: [
            create_role_use_case_1.CreateRoleUseCase,
            {
                provide: role_repository_1.RoleRepository,
                useClass: prisma_role_repository_1.PrismaRoleRepository,
            },
        ],
        exports: [role_repository_1.RoleRepository],
    })
], RolesModule);
//# sourceMappingURL=roles.module.js.map