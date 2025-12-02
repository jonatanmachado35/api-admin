import { LoginUseCase } from './application/login.use-case';
import { RefreshTokenUseCase } from './application/refresh-token.use-case';
import { CreateUserUseCase } from '../users/application/create-user.use-case';
import { User } from '../users/domain/user.entity';
export declare class AuthController {
    private loginUseCase;
    private refreshTokenUseCase;
    private createUserUseCase;
    constructor(loginUseCase: LoginUseCase, refreshTokenUseCase: RefreshTokenUseCase, createUserUseCase: CreateUserUseCase);
    register(user: Partial<User>): Promise<User>;
    login(req: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refresh(req: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
