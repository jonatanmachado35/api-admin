"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const login_use_case_1 = require("./application/login.use-case");
const refresh_token_use_case_1 = require("./application/refresh-token.use-case");
const refresh_token_guard_1 = require("./guards/refresh-token.guard");
let AuthController = class AuthController {
    loginUseCase;
    refreshTokenUseCase;
    constructor(loginUseCase, refreshTokenUseCase) {
        this.loginUseCase = loginUseCase;
        this.refreshTokenUseCase = refreshTokenUseCase;
    }
    async login(req) {
        return this.loginUseCase.execute(req.user);
    }
    async refresh(req) {
        const userId = req.user['sub'];
        const refreshToken = req.user['refreshToken'];
        return this.refreshTokenUseCase.execute(userId, refreshToken);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(refresh_token_guard_1.RefreshTokenGuard),
    (0, common_1.Get)('refresh'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [login_use_case_1.LoginUseCase,
        refresh_token_use_case_1.RefreshTokenUseCase])
], AuthController);
//# sourceMappingURL=auth.controller.js.map