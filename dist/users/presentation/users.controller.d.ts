import { FindUserUseCase } from '../application/find-user.use-case';
export declare class UsersController {
    private readonly findUserUseCase;
    constructor(findUserUseCase: FindUserUseCase);
    getProfile(req: any): Promise<{
        id: string;
        email: string;
    }>;
}
