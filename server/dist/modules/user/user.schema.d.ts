/// <reference types="passport-local-mongoose" />
import * as mongoose from 'mongoose';
declare const UserSchema: mongoose.Schema<any>;
export { UserSchema };
export interface UserModel {
    username: string;
    password: string;
    isAdm: boolean;
    disabled: boolean;
}
export interface User extends mongoose.PassportLocalDocument, UserModel {
}
export interface ExpressUser extends UserModel {
    _id: string;
}
