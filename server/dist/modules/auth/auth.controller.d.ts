import { Request } from 'express';
import { UserService } from '../user/user.service';
export declare class AuthController {
    private userService;
    constructor(userService: UserService);
    login(req: Request): Promise<{
        _id: string;
        username: string;
        isAdmin: boolean;
        disabled: boolean;
    }>;
    isLoggedIn(req: Request): Promise<{
        _id: string;
        username: string;
        isAdmin: boolean;
        disabled: boolean;
    }>;
    logout(req: Request): void;
    createDefault(): Promise<import("../user/user.schema").User>;
}
