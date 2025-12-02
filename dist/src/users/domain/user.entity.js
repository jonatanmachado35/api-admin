"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    email;
    password;
    refreshToken;
    roles;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map