import { Role } from '../../roles/domain/role.entity';
export declare class User {
    id: string;
    email: string;
    password?: string;
    refreshToken?: string;
    roles?: Role[];
    constructor(partial: Partial<User>);
}
