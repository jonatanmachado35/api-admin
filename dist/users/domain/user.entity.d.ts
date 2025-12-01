export declare class User {
    id: string;
    email: string;
    password?: string;
    refreshToken?: string;
    constructor(partial: Partial<User>);
}
