/// <reference types="passport-local-mongoose" />
import { PassportLocalModel } from 'mongoose';
import { User } from './user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: PassportLocalModel<User>);
    getUser(username: string): Promise<User>;
    createAdmin(username: string, password: string): Promise<User>;
}
