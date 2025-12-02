import { LoginUseCase } from './application/login.use-case';
import { RefreshTokenUseCase } from './application/refresh-token.use-case';
export declare class AuthController {
    private loginUseCase;
    private refreshTokenUseCase;
    constructor(loginUseCase: LoginUseCase, refreshTokenUseCase: RefreshTokenUseCase);
    login(req: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refresh(req: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
