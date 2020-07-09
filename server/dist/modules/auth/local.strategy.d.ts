/// <reference types="passport-local-mongoose" />
import { Strategy } from 'passport-local';
import { PassportLocalModel } from 'mongoose';
import { User } from '../user/user.schema';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private userModel;
    constructor(userModel: PassportLocalModel<User>);
}
export {};
