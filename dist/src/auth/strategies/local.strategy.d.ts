import { Strategy } from 'passport-local';
import { ValidateUserUseCase } from '../application/validate-user.use-case';
declare const LocalStrategy_base: new (...args: [] | [options: import("passport-local").IStrategyOptionsWithRequest] | [options: import("passport-local").IStrategyOptions]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class LocalStrategy extends LocalStrategy_base {
    private validateUserUseCase;
    constructor(validateUserUseCase: ValidateUserUseCase);
    validate(email: string, pass: string): Promise<any>;
}
export {};
