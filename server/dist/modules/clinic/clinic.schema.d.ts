import * as mongoose from 'mongoose';
export declare const ClinicSchema: mongoose.Schema<any>;
export interface ClinicDto {
    name: string;
}
export interface Clinic extends mongoose.Document, ClinicDto {
    owner: string;
}
