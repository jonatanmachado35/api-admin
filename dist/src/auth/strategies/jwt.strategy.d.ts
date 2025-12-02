import { Strategy } from 'passport-jwt';
import { UserRepository } from '../../users/domain/user.repository';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: any): Promise<{
        userId: string;
        email: string;
        roles: import("../../roles/domain/role.entity").Role[] | undefined;
    }>;
}
export {};
