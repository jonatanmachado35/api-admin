import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../users/domain/user.repository';
export declare class RefreshTokenUseCase {
    private readonly jwtService;
    private readonly userRepository;
    constructor(jwtService: JwtService, userRepository: UserRepository);
    execute(userId: string, refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    updateRefreshToken(userId: string, refreshToken: string): Promise<void>;
}
