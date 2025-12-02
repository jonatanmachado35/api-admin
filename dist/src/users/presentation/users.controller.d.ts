import { FindUserUseCase } from '../application/find-user.use-case';
import { CreateUserUseCase } from '../application/create-user.use-case';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly findUserUseCase;
    private readonly createUserUseCase;
    constructor(findUserUseCase: FindUserUseCase, createUserUseCase: CreateUserUseCase);
    create(body: CreateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        telephone: string;
        document: string;
        pix: string;
        roles?: import("../../roles/domain/role.entity").Role[];
        created_at?: Date;
    }>;
    getProfile(req: any): Promise<{
        id: string;
        name: string;
        email: string;
        telephone: string;
        document: string;
        pix: string;
        roles?: import("../../roles/domain/role.entity").Role[];
        created_at?: Date;
    }>;
}
