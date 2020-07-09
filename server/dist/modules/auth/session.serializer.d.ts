/// <reference types="passport-local-mongoose" />
import { PassportSerializer } from '@nestjs/passport';
import { User } from '../user/user.schema';
import { PassportLocalModel } from 'mongoose';
export declare class SessionSerializer extends PassportSerializer {
    private userModel;
    constructor(userModel: PassportLocalModel<User>);
    serializeUser(user: any, done: (err: Error, user: any) => void): void;
    deserializeUser(payload: any, done: (err: Error, payload: string) => void): void;
}
