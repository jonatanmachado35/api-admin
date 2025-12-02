import { CreateRoleUseCase } from '../application/create-role.use-case';
export declare class RolesController {
    private readonly createRoleUseCase;
    constructor(createRoleUseCase: CreateRoleUseCase);
    create(name: string): Promise<import("../domain/role.entity").Role>;
}
