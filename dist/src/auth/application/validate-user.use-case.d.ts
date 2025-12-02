import { FindUserUseCase } from '../../users/application/find-user.use-case';
export declare class ValidateUserUseCase {
    private readonly findUserUseCase;
    constructor(findUserUseCase: FindUserUseCase);
    execute(email: string, pass: string): Promise<any>;
}
