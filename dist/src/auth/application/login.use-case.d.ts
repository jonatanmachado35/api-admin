import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../users/domain/user.repository';
export declare class LoginUseCase {
    private readonly jwtService;
    private readonly userRepository;
    constructor(jwtService: JwtService, userRepository: UserRepository);
    execute(user: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    updateRefreshToken(userId: string, refreshToken: string): Promise<void>;
}
